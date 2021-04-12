import { User } from 'oidc-client';
import { AuthState } from './AuthContextInterface';

type Action =
  | { type:
        | 'INITIALISED'
        | 'USER_LOADED',
      user: User | null
    }
  | { type: 'LOGIN_POPUP_STARTED' }
  | { type: 'LOGIN_POPUP_COMPLETE', user: User }
  | { type: 'SIGNOUT' };

/**
 * Handles how that state changes in the `useAuth` hook.
 */
export const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
    case 'USER_LOADED':
      return {
        ...state,
        userData: action.user,
        isLoading: false,
      };
    case 'SIGNOUT':
      return {
        ...state,
        userData: undefined,
      };
  }
};
