/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { useContext } from 'react';
import { AuthContextProps, AuthContext } from './AuthContext';

export const useAuth = () => {
  return useContext<AuthContextProps>(AuthContext);
};