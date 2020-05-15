/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import React from 'react';
import { UserManager } from 'oidc-client';
import { AuthProvider, AuthContext } from '../AuthContext';
import { render, act, waitFor } from '@testing-library/react';

jest.mock('oidc-client');

describe('AuthContext', () => {
  it('should check for user and redirect', async () => {
    await act(async () => {
      const u = {
        getUser: jest.fn(),
        signinRedirect: jest.fn(),
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
  it('should not redirect when asked', async () => {
    await act(async () => {
      const u = {
        getUser: jest.fn(),
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

  it('should get userData', async () => {
    await act(async () => {
      const userManager = {
        getUser: async () => ({
          access_token: 'token',
        }),
        signinRedirectCallback: jest.fn(),
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

  it('should login the user', async () => {
    const userManager = {
      getUser: jest.fn(),
      signinRedirectCallback: jest.fn(),
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
      expect(userManager.signinRedirectCallback).toHaveBeenCalled(),
    );
  });

  it('should logout the user', async () => {
    const userManager = {
      getUser: async () => ({
        access_token: 'token',
      }),
      removeUser: jest.fn(),
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
