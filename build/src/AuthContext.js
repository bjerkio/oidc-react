"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.initUserManager = exports.hasCodeInUrl = exports.AuthContext = void 0;
var react_1 = __importStar(require("react"));
var oidc_client_1 = require("oidc-client");
exports.AuthContext = react_1.default.createContext(undefined);
exports.hasCodeInUrl = function (location) {
    var searchParams = new URLSearchParams(location.search);
    var hashParams = new URLSearchParams(location.hash.replace('#', '?'));
    return Boolean(searchParams.get('code') ||
        searchParams.get('id_token') ||
        searchParams.get('session_state') ||
        hashParams.get('code') ||
        hashParams.get('id_token') ||
        hashParams.get('session_state'));
};
exports.initUserManager = function (props) {
    if (props.userManager)
        return props.userManager;
    var authority = props.authority, clientId = props.clientId, clientSecret = props.clientSecret, redirectUri = props.redirectUri, silentRedirectUri = props.silentRedirectUri, postLogoutRedirectUri = props.postLogoutRedirectUri, responseType = props.responseType, scope = props.scope, automaticSilentRenew = props.automaticSilentRenew, loadUserInfo = props.loadUserInfo, popupWindowFeatures = props.popupWindowFeatures, popupRedirectUri = props.popupRedirectUri, popupWindowTarget = props.popupWindowTarget;
    return new oidc_client_1.UserManager({
        authority: authority,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        silent_redirect_uri: silentRedirectUri || redirectUri,
        post_logout_redirect_uri: postLogoutRedirectUri || redirectUri,
        response_type: responseType || 'code',
        scope: scope || 'openid',
        loadUserInfo: loadUserInfo != undefined ? loadUserInfo : true,
        popupWindowFeatures: popupWindowFeatures,
        popup_redirect_uri: popupRedirectUri,
        popupWindowTarget: popupWindowTarget,
        automaticSilentRenew: automaticSilentRenew,
    });
};
exports.AuthProvider = function (_a) {
    var children = _a.children, _b = _a.autoSignIn, autoSignIn = _b === void 0 ? true : _b, onBeforeSignIn = _a.onBeforeSignIn, onSignIn = _a.onSignIn, onSignOut = _a.onSignOut, _c = _a.location, location = _c === void 0 ? window.location : _c, props = __rest(_a, ["children", "autoSignIn", "onBeforeSignIn", "onSignIn", "onSignOut", "location"]);
    var _d = react_1.useState(true), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(null), userData = _e[0], setUserData = _e[1];
    var userManager = react_1.useState(exports.initUserManager(props))[0];
    var signOutHooks = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setUserData(null);
            onSignOut && onSignOut();
            return [2];
        });
    }); };
    var signInPopupHooks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userFromPopup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, userManager.signinPopup()];
                case 1:
                    userFromPopup = _a.sent();
                    setUserData(userFromPopup);
                    onSignIn && onSignIn(userFromPopup);
                    return [4, userManager.signinPopupCallback()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); };
    var isMountedRef = react_1.useRef(true);
    react_1.useEffect(function () {
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    react_1.useEffect(function () {
        var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
            var user_1, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!exports.hasCodeInUrl(location)) return [3, 2];
                        return [4, userManager.signinCallback().catch(function () { return undefined; })];
                    case 1:
                        user_1 = _a.sent();
                        if (!user_1)
                            return [2];
                        setUserData(user_1);
                        setIsLoading(false);
                        onSignIn && onSignIn(user_1);
                        return [2];
                    case 2: return [4, userManager.getUser()];
                    case 3:
                        user = _a.sent();
                        if ((!user || user.expired) && autoSignIn) {
                            onBeforeSignIn && onBeforeSignIn();
                            userManager.signinRedirect();
                        }
                        else if (isMountedRef.current) {
                            setUserData(user);
                            setIsLoading(false);
                        }
                        return [2];
                }
            });
        }); };
        getUser();
    }, [location, userManager, autoSignIn, onBeforeSignIn, onSignIn]);
    react_1.useEffect(function () {
        var updateUserData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userManager.getUser()];
                    case 1:
                        user = _a.sent();
                        isMountedRef.current && setUserData(user);
                        return [2];
                }
            });
        }); };
        userManager.events.addUserLoaded(updateUserData);
        return function () { return userManager.events.removeUserLoaded(updateUserData); };
    }, [userManager]);
    return (react_1.default.createElement(exports.AuthContext.Provider, { value: {
            signIn: function (args) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, userManager.signinRedirect(args)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
            signInPopup: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, signInPopupHooks()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
            signOut: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, userManager.removeUser()];
                        case 1:
                            _a.sent();
                            return [4, signOutHooks()];
                        case 2:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
            signOutRedirect: function (args) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, userManager.signoutRedirect(args)];
                        case 1:
                            _a.sent();
                            return [4, signOutHooks()];
                        case 2:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
            userManager: userManager,
            userData: userData,
            isLoading: isLoading,
        } }, children));
};
