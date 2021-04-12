/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import React from 'react';
import { UserManager } from 'oidc-client';
import { render, act, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, AuthContext } from '../AuthContext';
import { useAuth } from '../useAuth';
import { createWrapper } from './helpers'

const events = {
  addUserLoaded: () => undefined,
  removeUserLoaded: () => undefined,
};

const userMock = { id_token: '__test_user__' } as any;

jest.mock('oidc-client', () => {
  return {
    UserManager: jest.fn().mockImplementation(() => {
      return {
        getUser: jest.fn(),
        signinRedirect: jest.fn(),
        events,
      };
    }),
  };
});

describe('AuthContext', () => {
  it('should check for user and redirect', async () => {
    await act(async () => {
      const u = {
        getUser: jest.fn(),
        signinRedirect: jest.fn(),
        events,
      } as any;
      const onBeforeSignIn = jest.fn();
      render(<AuthProvider userManager={u} onBeforeSignIn={onBeforeSignIn} />);
      await waitFor(() => expect(u.getUser).toHaveBeenCalled());
      await waitFor(() => expect(onBeforeSignIn).toHaveBeenCalled());
      await waitFor(() => expect(u.signinRedirect).toHaveBeenCalled());
    });
  });

  it('should redirect when asked', async () => {
    const userManagerMock = {
      getUser: jest.fn().mockResolvedValue(null),
      signinRedirect: jest.fn(),
      events,
    } as any;
    const wrapper = createWrapper({ userManager: userManagerMock, autoSignIn: false });
    const { waitForNextUpdate, result } = renderHook(() => useAuth(), {
      wrapper,
    });
    await waitForNextUpdate();
    expect(result.current.userData).toBeNull();

    act(() => {
      result.current.signIn();
    });

    expect(userManagerMock.getUser).toHaveBeenCalled();
    expect(userManagerMock.signinRedirect).toHaveBeenCalled();
  });

  it('should open Popup when asked', async () => {
    const userManagerMock = {
      getUser: jest.fn().mockResolvedValue(null),
      signinPopupCallback: jest.fn(),
      signinPopup: jest.fn().mockResolvedValue(userMock),
      events,
    } as any;
    const wrapper = createWrapper({ userManager: userManagerMock, autoSignIn: false });
    const { waitForNextUpdate, result } = renderHook(() => useAuth(), {
      wrapper,
    });
    await waitForNextUpdate();
    expect(result.current.userData).toBeNull();

    act(() => {
      result.current.signInPopup();
    });

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.userData).toBe(userMock);
    expect(userManagerMock.signinPopup).toHaveBeenCalled();
    expect(userManagerMock.signinPopupCallback).toHaveBeenCalled();
  });

  it('should not redirect when asked', async () => {
    await act(async () => {
      const u = {
        getUser: jest.fn(),
        events,
      } as any;
      render(<AuthProvider userManager={u} autoSignIn={false}></AuthProvider>);
      await waitFor(() => expect(u.getUser).toHaveBeenCalled());
    });
  });

  it('should generate a UserManager', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
      />,
    );
    await waitFor(() => expect(UserManager).toHaveBeenCalled());
  });

  it('should use post-logout redirect URI when given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
        postLogoutRedirectUri="https://localhost"
      />,
    );
    await waitFor(() => expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ post_logout_redirect_uri: 'https://localhost'})
    ));
  });

  it('should fall back to redirectUri when post-logout redirect URI is not given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
      />,
    );
    await waitFor(() => expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ post_logout_redirect_uri: 'http://127.0.0.1'})
    ));
  });

  it('should use silent redirect URI when given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
        silentRedirectUri="https://localhost"
      />,
    );
    await waitFor(() => expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ silent_redirect_uri: 'https://localhost'})
    ));
  });

  it('should fall back to redirectUri when silent redirect URI is not given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
      />,
    );
    await waitFor(() => expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ silent_redirect_uri: 'http://127.0.0.1'})
    ));
  });

  it('should get userData', async () => {
    await act(async () => {
      const userManager = {
        getUser: async () => ({
          access_token: 'token',
        }),
        signinCallback: jest.fn(),
        events,
      } as any;
      const { getByText } = render(
        <AuthProvider userManager={userManager}>
          <AuthContext.Consumer>
            {(value) =>
              value?.userData && (
                <span>Received: {value.userData.access_token}</span>
              )
            }
          </AuthContext.Consumer>
        </AuthProvider>,
      );
      await waitFor(() =>
        expect(getByText(/^Received:/).textContent).toBe('Received: token'),
      );
    });
  });

  it('should refresh userData when new data is available', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signinCallback: jest.fn(),
      events: {
        addUserLoaded: (fn: () => void) => fn(),
        removeUserLoaded: () => undefined,
      },
    } as any;
    const { getByText } = render(
      <AuthProvider userManager={userManager}>
        <AuthContext.Consumer>
          {(value) =>
            value?.userData && (
              <span>Received: {value.userData.access_token}</span>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>,
    );
    await waitFor(() => {
      expect(getByText(/^Received:/).textContent).toBe('Received: token');
    });
  });

  it('should login the user', async () => {
    const userManager = {
      getUser: jest.fn(),
      signinCallback: jest.fn(),
      events,
    } as any;
    const location = {
      search: '?code=test-code',
      hash: '',
    };
    const onSignIn = jest.fn();
    render(
      <AuthProvider
        onSignIn={onSignIn}
        userManager={userManager}
        location={location}
      />,
    );
    await waitFor(() => expect(onSignIn).toHaveBeenCalled());
    await waitFor(() =>
      expect(userManager.signinCallback).toHaveBeenCalled(),
    );
  });

  it('should logout the user', async () => {
    const userManagerMock = {
      getUser: jest.fn().mockResolvedValue(userMock),
      removeUser: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    const wrapper = createWrapper({ userManager: userManagerMock, onSignOut });
    const { waitForNextUpdate, result } = renderHook(() => useAuth(), {
      wrapper,
    });
    await waitForNextUpdate();

    act(() => {
      result.current.signOut();
    });

    await waitForNextUpdate();
    expect(onSignOut).toHaveBeenCalled();
    expect(userManagerMock.removeUser).toHaveBeenCalled();
  });

  it('should end session and logout the user when signoutRedirect is true', async () => {
    const userManagerMock = {
      getUser: jest.fn().mockResolvedValue(userMock),
      signoutRedirect: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    const wrapper = createWrapper({ userManager: userManagerMock, onSignOut });
    const { waitForNextUpdate, result } = renderHook(() => useAuth(), {
      wrapper,
    });
    await waitForNextUpdate();

    act(() => {
      result.current.signOutRedirect();
    });

    await waitForNextUpdate();
    expect(onSignOut).toHaveBeenCalled();
    expect(userManagerMock.signoutRedirect).toHaveBeenCalled();
  });

  it('should end session and logout the user when signoutRedirect is an object', async () => {
    const userManagerMock = {
      getUser: jest.fn().mockResolvedValue(userMock),
      signoutRedirect: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    const wrapper = createWrapper({ userManager: userManagerMock, onSignOut });
    const { waitForNextUpdate, result } = renderHook(() => useAuth(), {
      wrapper,
    });
    await waitForNextUpdate();

    act(() => {
      result.current.signOutRedirect({ state: 'thebranches' });
    });

    await waitForNextUpdate();
    expect(onSignOut).toHaveBeenCalled();
    expect(userManagerMock.signoutRedirect).toHaveBeenCalledWith({ state: 'thebranches' });
  });
});
