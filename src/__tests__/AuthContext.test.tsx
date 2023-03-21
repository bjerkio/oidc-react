/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import React from 'react';
import { SilentRenewErrorCallback, UserManager } from 'oidc-client-ts';
import { AuthProvider, AuthContext } from '../AuthContext';
import { render, act, waitFor, RenderResult } from '@testing-library/react';

const events = {
  addUserLoaded: () => undefined,
  removeUserLoaded: () => undefined,
  addSilentRenewError: () => undefined,
  removeSilentRenewError: () => undefined,
};

jest.mock('oidc-client-ts', () => {
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
    const u = {
      getUser: jest.fn(),
      signinRedirect: jest.fn(),
      events,
    } as any;
    const onBeforeSignIn = jest.fn();
    await act(async () => {
      render(<AuthProvider userManager={u} onBeforeSignIn={onBeforeSignIn} />);
    });
    expect(u.getUser).toHaveBeenCalled();
    expect(onBeforeSignIn).toHaveBeenCalled();
    expect(u.signinRedirect).toHaveBeenCalled();
  });

  it('should redirect when asked', async () => {
    const u = {
      getUser: jest.fn(),
      signinRedirect: jest.fn(),
      events,
    } as any;
    await act(async () => {
      render(
        <AuthProvider userManager={u} autoSignIn={false}>
          <AuthContext.Consumer>
            {(value) => {
              value?.signIn();
              return <p>Bjerk</p>;
            }}
          </AuthContext.Consumer>
        </AuthProvider>,
      );
    });
    expect(u.getUser).toHaveBeenCalled();
    expect(u.signinRedirect).toHaveBeenCalled();
  });

  it('should open Popup when asked', async () => {
    const u = {
      getUser: jest.fn(),
      signinPopupCallback: jest.fn(),
      signinPopup: jest.fn(),
      events,
    } as any;
    await act(async () => {
      render(
        <AuthProvider userManager={u} autoSignIn={false}>
          <AuthContext.Consumer>
            {(value) => {
              value?.signInPopup();
              return <p>Bjerk</p>;
            }}
          </AuthContext.Consumer>
        </AuthProvider>,
      );
    });
    expect(u.signinPopupCallback).toHaveBeenCalled();
    expect(u.signinPopup).toHaveBeenCalled();
  });

  it('should not redirect when asked', async () => {
    const u = {
      getUser: jest.fn(),
      events,
    } as any;
    await act(async () => {
      render(<AuthProvider userManager={u} autoSignIn={false}></AuthProvider>);
    });
    expect(u.getUser).toHaveBeenCalled();
  });

  it('should generate a UserManager', async () => {
    await act(async () => {
      render(
        <AuthProvider
          authority="http://127.0.0.1"
          clientId="client-id-test"
          redirectUri="http://127.0.0.1"
        />,
      );
    });
    expect(UserManager).toHaveBeenCalled();
  });

  it('should use post-logout redirect URI when given', async () => {
    await act(async () => {
      render(
        <AuthProvider
          authority="http://127.0.0.1"
          clientId="client-id-test"
          redirectUri="http://127.0.0.1"
          postLogoutRedirectUri="https://localhost"
        />,
      );
    });
    expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({
        post_logout_redirect_uri: 'https://localhost',
      }),
    );
  });

  it('should fall back to redirectUri when post-logout redirect URI is not given', async () => {
    await act(async () => {
      render(
        <AuthProvider
          authority="http://127.0.0.1"
          clientId="client-id-test"
          redirectUri="http://127.0.0.1"
        />,
      );
    });
    expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ post_logout_redirect_uri: 'http://127.0.0.1' }),
    );
  });

  it('should use silent redirect URI when given', async () => {
    await act(async () => {
      render(
        <AuthProvider
          authority="http://127.0.0.1"
          clientId="client-id-test"
          redirectUri="http://127.0.0.1"
          silentRedirectUri="https://localhost"
        />,
      );
    });
    expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ silent_redirect_uri: 'https://localhost' }),
    );
  });

  it('should fall back to redirectUri when silent redirect URI is not given', async () => {
    await act(async () => {
      render(
        <AuthProvider
          authority="http://127.0.0.1"
          clientId="client-id-test"
          redirectUri="http://127.0.0.1"
        />,
      );
    });
    expect(UserManager).toHaveBeenLastCalledWith(
      expect.objectContaining({ silent_redirect_uri: 'http://127.0.0.1' }),
    );
  });

  it('should get userData', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signinCallback: jest.fn(),
      events,
    } as any;
    let result: any;
    await act(async () => {
      result = render(
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
    });
    expect(result.getByText(/^Received:/).textContent).toBe('Received: token');
  });

  it('should refresh userData when new data is available', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signinCallback: jest.fn(),
      signoutRedirect: jest.fn(),
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
    await waitFor(() => expect(userManager.signinCallback).toHaveBeenCalled());
  });

  it('should logout the user', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      removeUser: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    render(
      <AuthProvider
        onSignOut={onSignOut}
        userManager={userManager}
        location={location}
      >
        <AuthContext.Consumer>
          {(value) => {
            value?.signOut();
            return <p>Bjerk</p>;
          }}
        </AuthContext.Consumer>
      </AuthProvider>,
    );
    await waitFor(() => expect(onSignOut).toHaveBeenCalled());
    await waitFor(() => expect(userManager.removeUser).toHaveBeenCalled());
  });

  it('should end session and logout the user when signoutRedirect is true', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signoutRedirect: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    render(
      <AuthProvider
        onSignOut={onSignOut}
        userManager={userManager}
        location={location}
      >
        <AuthContext.Consumer>
          {(value) => {
            value?.signOutRedirect();
            return <p>Bjerk</p>;
          }}
        </AuthContext.Consumer>
      </AuthProvider>,
    );
    await waitFor(() => expect(onSignOut).toHaveBeenCalled());
    await waitFor(() => expect(userManager.signoutRedirect).toHaveBeenCalled());
  });

  it('should end session and logout the user when signoutRedirect is an object', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signoutRedirect: jest.fn(),
      events,
    } as any;
    const onSignOut = jest.fn();
    render(
      <AuthProvider
        onSignOut={onSignOut}
        userManager={userManager}
        location={location}
      >
        <AuthContext.Consumer>
          {(value) => {
            value?.signOutRedirect({
              state: 'thebranches',
            });
            return <p>Bjerk</p>;
          }}
        </AuthContext.Consumer>
      </AuthProvider>,
    );
    await waitFor(() => expect(onSignOut).toHaveBeenCalled());
    await waitFor(() =>
      expect(userManager.signoutRedirect).toHaveBeenCalledWith({
        state: 'thebranches',
      }),
    );
  });

  it('should sign out redirect on silent renew failure', async () => {
    // given: a signed in UserManager that stashes silentRenewError callbacks
    const callbacks: SilentRenewErrorCallback[] = [];
    const u = {
      getUser: async () => ({
        access_token: 'token',
      }),
      signinCallback: jest.fn(),
      signoutRedirect: jest.fn(),
      events: {
        ...events,
        addSilentRenewError: jest.fn((callback) => callbacks.push(callback)),
        removeSilentRenewError: jest.fn((callback) =>
          callbacks.splice(callbacks.indexOf(callback), 1),
        ),
      },
    } as any;

    // when: the AuthProvider is mounted
    let result: RenderResult;
    await act(async () => {
      result = render(<AuthProvider userManager={u} />);
    });

    // then: the silentRenewError callback should be registered
    expect(u.events.addSilentRenewError).toHaveBeenCalledTimes(1);
    expect(callbacks).toHaveLength(1);

    // when: the registered silentRenewError callback is called
    await act(async () => {
      callbacks[0](new Error('test'));
    });

    // then: the callback should trigger a signout redirect
    expect(u.signoutRedirect).toHaveBeenCalledTimes(1);

    // when: the AuthProvider is unmounted
    act(() => {
      result.unmount();
    });

    // then: the callback should be unregistered
    expect(u.events.removeSilentRenewError).toHaveBeenCalledTimes(1);
    expect(callbacks).toHaveLength(0);
  });
});
