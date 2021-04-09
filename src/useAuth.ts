/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { useContext } from 'react';
import { AuthContextProps } from './AuthContextInterface';
import { AuthContext } from './AuthContext';

export const useAuth = (): AuthContextProps => {
  const context = useContext<AuthContextProps | undefined>(AuthContext);
  
  if (!context) {
    throw new Error('AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component.');
  }
  
  return context;
};