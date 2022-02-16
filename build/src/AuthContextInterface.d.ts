import { UserManager, User } from 'oidc-client';
export interface Location {
    search: string;
    hash: string;
}
export interface AuthProviderSignOutProps {
    signoutRedirect?: boolean | unknown;
}
export interface AuthProviderProps {
    userManager?: UserManager;
    authority?: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    silentRedirectUri?: string;
    postLogoutRedirectUri?: string;
    responseType?: string;
    scope?: string;
    location?: Location;
    autoSignIn?: boolean;
    automaticSilentRenew?: boolean;
    loadUserInfo?: boolean;
    popupWindowFeatures?: string;
    popupRedirectUri?: string;
    popupWindowTarget?: string;
    onBeforeSignIn?: () => void;
    onSignIn?: (userData: User | null) => Promise<void> | void;
    onSignOut?: (options?: AuthProviderSignOutProps) => Promise<void> | void;
}
export interface AuthContextProps {
    signIn: (args?: unknown) => Promise<void>;
    signInPopup: () => Promise<void>;
    signOut: () => Promise<void>;
    signOutRedirect: (args?: unknown) => Promise<void>;
    userManager: UserManager;
    userData?: User | null;
    isLoading: boolean;
}
