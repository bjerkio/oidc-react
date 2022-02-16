import { AuthContextProps } from './AuthContextInterface';
import React from 'react';
export declare function withAuth<P extends AuthContextProps>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof AuthContextProps>>;
