/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { useContext } from 'react';
import { AuthContextProps } from './AuthContextInterface';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  return useContext<AuthContextProps|null>(AuthContext);
};