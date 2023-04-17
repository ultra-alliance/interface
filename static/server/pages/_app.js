"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4806);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3540);
/* harmony import */ var _ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2042);
/* harmony import */ var _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6122);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const clientSideEmotionCache = (0,_utilities_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
const MyApp = (props)=>{
    const { Component , pageProps , emotionCache =clientSideEmotionCache  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
            theme: _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ultraTheme */ .xF,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CssBaseline, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.GlobalStyles, {
                    styles: {
                        body: {
                            background: _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ultraTheme.palette.background["default"] */ .xF.palette.background["default"]
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_6__/* .UltraProvider */ .o2, {
                    bpApiEndpoint: _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_BP_API_ENDPOINT */ .Fv,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
                    theme: "dark",
                    toastStyle: {
                        background: _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ultraTheme.palette.background.paper */ .xF.palette.background.paper,
                        color: _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ultraTheme.palette.text.primary */ .xF.palette.text.primary,
                        border: "1px solid",
                        borderColor: _ultra_alliance_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ultraTheme.palette.divider */ .xF.palette.divider,
                        boxShadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.3)"
                    },
                    position: "bottom-right",
                    autoClose: 5000,
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                    hideProgressBar: false,
                    newestOnTop: false
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utilities_createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/utilities/createEmotionCache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css",
        prepend: true
    });
};
/* harmony default export */ const utilities_createEmotionCache = (createEmotionCache);


/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xF": () => (/* reexport */ ultraTheme)
});

// UNUSED EXPORTS: ThemeProvider, ultraColors, useBreakPoint

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../ultra-utilities/packages/uikit/dist/esm/themes/ThemeProvider/index.js
// istanbul ignore file



/**
 * @name ThemeProvider
 * @caterory Providers
 * @param  {ThemeProviderProps} - props for ThemeProvider
 * @returns {React.ReactElement} - React component
 * @constructor ThemeProvider - React component
 * @category ThemeProvider
 * @subcategory ThemeProvider
 * @component
 * @public
 * @example
 * <ThemeProvider theme={theme}>
 *  <p>Hello</p>
 * </ThemeProvider>
 * @see https://mui.com/customization/theming/
 *
 * */
const ThemeProvider = ({ theme, children, }) => {
    return (React.createElement(MuiThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(GlobalStyles, { styles: {
                body: { background: theme.palette.background.default },
            } }),
        children));
};
/* harmony default export */ const themes_ThemeProvider = ((/* unused pure expression or super */ null && (ThemeProvider)));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/uikit/dist/esm/themes/colors/index.js
/**
tUltraColors defines the type of object for the Ultra color palette.
@typedef {Object} tUltraColors
@property {string} lilacLuster - Hexadecimal code for the color Lilac Luster (#C5ABFF).
@property {string} orchidHaze - Hexadecimal code for the color Orchid Haze (#A481F0).
@property {string} royalAmethyst - Hexadecimal code for the color Royal Amethyst (#7A52D1).
@property {string} irishEnchantment - Hexadecimal code for the color Irish Enchantment (#5F4B8B).
@property {string} midnightAshes - Hexadecimal code for the color Midnight Ashes (#3C3846).
@category Theme
@description The ultraColors object exports the Ultra color palette as an object with tUltraColors type.
@example
```tsx
import { ultraColors } from '@ultra-utilities/uikit';
```
*/
const ultraColors = {
    lilacLuster: '#C5ABFF',
    orchidHaze: '#A481F0',
    royalAmethyst: '#7A52D1',
    irishEnchantment: '#5F4B8B',
    midnightAshes: '#3C3846',
};
/* harmony default export */ const colors = (ultraColors);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../ultra-utilities/node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(2770);
;// CONCATENATED MODULE: ../ultra-utilities/packages/uikit/dist/esm/themes/theme/index.js
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/**
 * Custom Ultra theme module using MUI (Material-UI) library. This module exports an Ultra Theme object with custom theme specifications, including the Ultra color palette, breakpoints, typography, shape, and other MUI components with style overrides.
 *
 * @packageDocumentation
 */


/**
 * The Ultra Theme object with custom theme specifications.
 *
 * @category Theme
 */
const ultraTheme = (0,styles.createTheme)({
    ultra: colors,
    dimensions: {
        drawerWidth: 60,
    },
    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontWeight: 600,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            fontWeight: 600,
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: colors.royalAmethyst,
            light: colors.lilacLuster,
            dark: colors.orchidHaze,
        },
        secondary: {
            main: colors.midnightAshes,
            light: colors.royalAmethyst,
            dark: colors.irishEnchantment,
        },
        background: {
            default: colors.midnightAshes,
            paper: colors.midnightAshes,
        },
    },
    shape: {
        borderRadius: 4,
    },
    mixins: {
        toolbar: {
            minHeight: 48,
            width: 80,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    backgroundColor: colors.midnightAshes,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: colors.royalAmethyst,
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid',
                    borderColor: colors.royalAmethyst,
                },
                arrow: {
                    color: colors.royalAmethyst,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {},
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                },
            },
        },
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/uikit/dist/esm/themes/index.js
// istanbul ignore file




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/uikit/dist/esm/index.js
// istanbul ignore file
/**
 * <img alt='' src='https://img.shields.io/badge/NOT PUBLISHED-100000?style=for-the-badge&logo=&logoColor=e57373&labelColor=FFFFFF&color=e57373'/>
 * @license MIT
 * @module uikit
 * @description
 * UI kit provides {@link https://material-ui.com/ | Material UI (MUI)} theme and a set of
 * React hooks and components for building performant, scalable, and accessible
 * applications connected to the UOS.
 *
 * ## ⚙️ Quick Start
 *
 * Make sure to have `@mui/material`, `@emotion/react`, ` @emotion/styled`  installed as dependencies. We also need to import `@fontsource/inter` and `@mui/icons-material` for the fonts and icon, then install `@ultra-alliance/uikit`.
 *
 * In short (or not):
 * ```bash
 * npm install @mui/material @emotion/react @emotion/styled  @fontsource/inter @mui/icons-material @ultra-alliance/uikit
 * ```
 *
 * Then you can use the {@link ultraTheme} inside your MUI theme provider:
 *
 * ```typescript
 * import { ultraTheme } from '@ultra-alliance/uikit';
 * import { ThemeProvider } from '@mui/material';
 *
 * React.DOM.render(
 * <ThemeProvider theme={ultraTheme}>
 *  <App />
 *  </ThemeProvider>,
 * document.getElementById('root')
 * );
 * ```
 *
 *  ## 🚀 Usage
 *
 * You can read more about Material UI in the {@link https://mui.com/customization/theming/ | MUI documentation}.
 * You can also see some examples in the storybook.
 *
 * <a href='' target="_blank"><img alt='' src='https://img.shields.io/badge/uikit storybook-100000?style=for-the-badge&logo=&logoColor=A481F0&labelColor=FFFFFF&color=A481F0'/></a>
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [554,753,42], () => (__webpack_exec__(4979)));
module.exports = __webpack_exports__;

})();