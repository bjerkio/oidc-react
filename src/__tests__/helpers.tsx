/* eslint-disable react/display-name */
import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '../AuthContext';
import { AuthProviderProps } from '../AuthContextInterface';

export const createWrapper = (opts: AuthProviderProps) => ({
  children,
}: PropsWithChildren<AuthProviderProps>): JSX.Element => (
  <AuthProvider {...opts}>
    {children}
  </AuthProvider>
);
