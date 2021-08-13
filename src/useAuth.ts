/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { useContext } from 'react';
import { AuthContextProps } from './AuthContextInterface';
import { AuthContext, defaultAuthContext } from './AuthContext';

export const useAuth = (ssr?: boolean): AuthContextProps => {
  const context = useContext<AuthContextProps>(AuthContext);
  
  if (!ssr && context === defaultAuthContext) {
    throw new Error('AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component.');
  }
  
  return context;
};