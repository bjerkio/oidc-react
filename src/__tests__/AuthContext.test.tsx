/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import React from 'react';
import { UserManager } from 'oidc-client';
import { AuthProvider, AuthContext } from '../AuthContext';
import { render, act, waitFor } from '@testing-library/react';

const events = {
  addUserLoaded: () => undefined,
  removeUserLoaded: () => undefined,
};

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
    await act(async () => {
      const u = {
        getUser: jest.fn(),
        signinRedirect: jest.fn(),
        events,
      } as any;
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
      await waitFor(() => expect(u.getUser).toHaveBeenCalled());
      await waitFor(() => expect(u.signinRedirect).toHaveBeenCalled());
    });
  });
  it('should open Popup when asked', async () => {
    await act(async () => {
      const u = {
        getUser: jest.fn(),
        signinPopupCallback: jest.fn(),
        signinPopup: jest.fn(),
        events,
      } as any;
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
      await waitFor(() => expect(u.signinPopupCallback).toHaveBeenCalled());
      await waitFor(() => expect(u.signinPopup).toHaveBeenCalled());
    });
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
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({
          post_logout_redirect_uri: 'https://localhost',
        }),
      ),
    );
  });
  it('should fall back to redirectUri when post-logout redirect URI is not given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
      />,
    );
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({
          post_logout_redirect_uri: 'http://127.0.0.1',
        }),
      ),
    );
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
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({ silent_redirect_uri: 'https://localhost' }),
      ),
    );
  });
  it('should fall back to redirectUri when silent redirect URI is not given', async () => {
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
      />,
    );
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({ silent_redirect_uri: 'http://127.0.0.1' }),
      ),
    );
  });

  it('should use extraQueryParams props when is given', async () => {
    const extraQueryParams = {
      code_challenge_method: 'S256',
      code_challenge: 'adsasdlas-pldflsdi3njern32j_jdmfkdsakn2u3-df23moj2m',
    };
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
        extraQueryParams={extraQueryParams}
      />,
    );
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({ extraQueryParams: { ...extraQueryParams } }),
      ),
    );
  });

  it('should use metadata props when is given', async () => {
    const metadata = {
      issuer: `http://127.0.0.1`,
      authorization_endpoint: `http://127.0.0.1/authorize`,
      token_endpoint: `http://127.0.0.1}/access_token`,
      userinfo_endpoint: `http://127.0.0.1/userinfo`,
    };
    render(
      <AuthProvider
        authority="http://127.0.0.1"
        clientId="client-id-test"
        redirectUri="http://127.0.0.1"
        metadata={metadata}
      />,
    );
    await waitFor(() =>
      expect(UserManager).toHaveBeenLastCalledWith(
        expect.objectContaining({ metadata: { ...metadata } }),
      ),
    );
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
});
