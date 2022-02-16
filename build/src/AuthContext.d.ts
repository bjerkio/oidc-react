import React, { FC } from 'react';
import { UserManager } from 'oidc-client';
import { Location, AuthProviderProps, AuthContextProps } from './AuthContextInterface';
export declare const AuthContext: React.Context<AuthContextProps | undefined>;
export declare const hasCodeInUrl: (location: Location) => boolean;
export declare const initUserManager: (props: AuthProviderProps) => UserManager;
export declare const AuthProvider: FC<AuthProviderProps>;
