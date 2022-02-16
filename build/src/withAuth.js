"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAuth = void 0;
var useAuth_1 = require("./useAuth");
var react_1 = __importDefault(require("react"));
function withAuth(Component) {
    var displayName = "withAuth(" + (Component.displayName || Component.name) + ")";
    var C = function (props) {
        var auth = useAuth_1.useAuth();
        return react_1.default.createElement(Component, __assign({}, props, auth));
    };
    C.displayName = displayName;
    return C;
}
exports.withAuth = withAuth;
