"use strict";
exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 5161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TF": () => (/* reexport */ LoadingIndicator),
  "MA": () => (/* reexport */ PriceDisplayRatio),
  "E1": () => (/* reexport */ molecules_SearchBar),
  "x4": () => (/* reexport */ UniqCard)
});

// UNUSED EXPORTS: ListedUniqCard

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(3939);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(319);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/index.js + 43 modules
var esm = __webpack_require__(6122);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/molecules/ListedUniqCard.tsx











ListedUniqCard.defaultProps = {
    manifest: undefined,
    listingDetails: undefined
};
function ListedUniqCard({ manifest , listingDetails  }) {
    var _a, _b, _c, _d;
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                elevation: 1,
                sx: {
                    border: "1px solid",
                    borderColor: (theme)=>theme.palette.divider,
                    boxShadow: (theme)=>theme.shadows[1],
                    "&:hover": {
                        transition: "all 0.2s ease",
                        borderColor: (theme)=>theme.palette.primary.light
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActionArea, {
                    sx: {
                        boxShadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.3)"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                p: 1,
                                position: "relative"
                            },
                            children: !((_b = (_a = manifest === null || manifest === void 0 ? void 0 : manifest.media) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.square) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                variant: "rectangular",
                                width: 245,
                                height: 140
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                sx: {
                                    aspectRatio: "1",
                                    borderRadius: 1,
                                    boxShadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.3)",
                                    border: "1px solid",
                                    borderColor: (theme)=>theme.palette.divider
                                },
                                image: (_d = (_c = manifest === null || manifest === void 0 ? void 0 : manifest.media) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.square,
                                title: "green iguana"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    textAlign: "center",
                                    variant: "h6",
                                    component: "div",
                                    fontWeight: "bold",
                                    children: !(manifest === null || manifest === void 0 ? void 0 : manifest.name) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        width: 100
                                    }) : manifest === null || manifest === void 0 ? void 0 : manifest.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    textAlign: "center",
                                    variant: "body2",
                                    color: "text.secondary",
                                    component: "div",
                                    children: !(manifest === null || manifest === void 0 ? void 0 : manifest.subName) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        width: 100
                                    }) : manifest === null || manifest === void 0 ? void 0 : manifest.subName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                    sx: {
                                        py: 1,
                                        pb: 2
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    sx: {
                                        pt: 2,
                                        color: "white"
                                    },
                                    component: "div",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    children: [
                                        !(listingDetails === null || listingDetails === void 0 ? void 0 : listingDetails.price) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            width: "100%"
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                " ",
                                                (0,esm/* formatCurrencyValue */.ME)({
                                                    value: listingDetails.price
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        color: theme.palette.primary.light
                                                    },
                                                    children: " ᕫ"
                                                })
                                            ]
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            style: {
                                                fontStyle: "italic",
                                                opacity: 0.6,
                                                fontSize: "0.8rem",
                                                fontWeight: "lighter",
                                                color: "white"
                                            },
                                            children: [
                                                "(\xb1 ",
                                                (0,esm/* formatCurrencyValue */.ME)({
                                                    value: 2123.12,
                                                    ticker: "$"
                                                }),
                                                ")"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    position: "absolute",
                    display: "flex",
                    top: "-5px",
                    left: "-5px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                    size: "small",
                    variant: "filled",
                    label: "Collectible",
                    sx: {
                        backgroundColor: "#737373",
                        boxShadow: (theme)=>theme.shadows[2]
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/uniq-icon.svg",
                        width: 20,
                        height: 20,
                        alt: "uniq icon"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/molecules/UniqCard.tsx










UniqCard.defaultProps = {
    manifest: undefined,
    uniq: undefined,
    onClick: ()=>{}
};
function UniqCard({ manifest , uniq , onClick  }) {
    var _a, _b, _c, _d;
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                elevation: 1,
                sx: {
                    border: "1px solid",
                    borderColor: (theme)=>theme.palette.divider,
                    boxShadow: (theme)=>theme.shadows[1],
                    "&:hover": {
                        transition: "all 0.2s ease",
                        borderColor: (theme)=>theme.palette.primary.light
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActionArea, {
                    onClick: onClick,
                    sx: {
                        boxShadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.3)"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                p: 1,
                                position: "relative"
                            },
                            children: !((_b = (_a = manifest === null || manifest === void 0 ? void 0 : manifest.media) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.square) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                variant: "rectangular",
                                width: "100%",
                                sx: {
                                    aspectRatio: "1"
                                }
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                sx: {
                                    aspectRatio: "1",
                                    borderRadius: 1,
                                    boxShadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.3)",
                                    border: "1px solid",
                                    borderColor: (theme)=>theme.palette.divider
                                },
                                image: (_d = (_c = manifest === null || manifest === void 0 ? void 0 : manifest.media) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.square,
                                title: "green iguana"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    textAlign: "center",
                                    variant: "h6",
                                    component: "div",
                                    fontWeight: "bold",
                                    children: !(manifest === null || manifest === void 0 ? void 0 : manifest.name) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        width: 100
                                    }) : manifest === null || manifest === void 0 ? void 0 : manifest.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    textAlign: "center",
                                    variant: "body2",
                                    color: "text.secondary",
                                    component: "div",
                                    children: !(manifest === null || manifest === void 0 ? void 0 : manifest.subName) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        width: 100
                                    }) : manifest === null || manifest === void 0 ? void 0 : manifest.subName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                    sx: {
                                        py: 1
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    sx: {
                                        pt: 1,
                                        color: "white"
                                    },
                                    component: "div",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    variant: "overline",
                                    children: [
                                        !(uniq === null || uniq === void 0 ? void 0 : uniq.asset_creator) ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            width: "100%"
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontWeight: "normal"
                                                    },
                                                    children: "by"
                                                }),
                                                " ",
                                                uniq.asset_creator
                                            ]
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    position: "absolute",
                    display: "flex",
                    top: "-5px",
                    left: "-5px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                    size: "small",
                    variant: "filled",
                    label: "Collectible",
                    sx: {
                        backgroundColor: "#737373",
                        boxShadow: (theme)=>theme.shadows[2]
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/uniq-icon.svg",
                        width: 20,
                        height: 20,
                        alt: "uniq icon"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/molecules/LoadingIndicator.tsx



function LoadingIndicator() {
    const randomNftTexts = [
        "Discover Unique collectibles",
        "Loading incredibles images",
        "Upgrading the NFT standard",
        "Downloading cool content",
        "Entering the UOS"
    ];
    const [randomText, setRandomText] = external_react_.useState(randomNftTexts[0]);
    // Change the random text every 3 seconds
    external_react_.useEffect(()=>{
        const intervalId = setInterval(()=>{
            setRandomText(randomNftTexts[Math.floor(Math.random() * randomNftTexts.length)]);
        }, 3000);
        return ()=>clearInterval(intervalId);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            height: "300px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "overline",
                align: "center",
                sx: {
                    mt: 2
                },
                children: randomText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.LinearProgress, {
                variant: "indeterminate"
            })
        ]
    });
}

// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
;// CONCATENATED MODULE: ./src/components/molecules/SearchBar.tsx





function SearchBar({ inputValue , onInputChange , onSearch , error , label , placeholder , helperTxt  }) {
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
        label: label,
        variant: "outlined",
        value: inputValue,
        size: "small",
        onChange: onInputChange,
        onKeyDown: (e)=>{
            if (e.key === "Enter") {
                onSearch();
            }
        },
        placeholder: placeholder,
        InputProps: {
            style: {
                padding: 0
            },
            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: "flex",
                    margin: 0,
                    alignItems: "center",
                    backgroundColor: error ? "red" : theme.palette.primary.main,
                    color: "white",
                    borderRadius: 4,
                    height: "100%",
                    padding: "8px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    style: {
                        backgroundColor: error ? "red" : theme.palette.primary.main,
                        color: "white",
                        borderRadius: 4,
                        padding: 2
                    },
                    onClick: (e)=>{
                        e.preventDefault();
                        onSearch();
                    },
                    disabled: inputValue.trim() === "" || !inputValue || inputValue === "",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {}),
                    children: "Search"
                })
            })
        },
        error: error ? true : false,
        helperText: error ? helperTxt : null
    });
}
/* harmony default export */ const molecules_SearchBar = (SearchBar);

// EXTERNAL MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/index.js + 13 modules
var dist_esm = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/components/molecules/PriceDisplayRatio.tsx




PriceDisplayRatio.defaultProps = {
    coreLiquidityBalance: undefined,
    baseCurrency: dist_esm/* CURRENCIES.0 */.Mf[0],
    uosPriceInBaseCurrency: undefined
};
function PriceDisplayRatio({ coreLiquidityBalance , baseCurrency , uosPriceInBaseCurrency  }) {
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
        variant: "h6",
        fontWeight: "bold",
        children: !coreLiquidityBalance || !baseCurrency || !uosPriceInBaseCurrency ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
            variant: "text",
            sx: {
                width: "100px",
                height: "40px"
            }
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        color: theme.palette.primary.light
                    },
                    children: " ᕫ "
                }),
                (0,esm/* formatUosBalance */.qT)(coreLiquidityBalance),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    style: {
                        display: (baseCurrency === null || baseCurrency === void 0 ? void 0 : baseCurrency.ticker) === "UOS" ? "none" : "",
                        color: "white",
                        opacity: 0.8,
                        fontWeight: 200,
                        fontSize: 14
                    },
                    children: [
                        " ",
                        "/ ",
                        baseCurrency.symbol,
                        " ",
                        (0,esm/* formatCurrencyValue */.ME)({
                            value: (0,esm/* calcTotalPrice */.H_)({
                                basePrice: uosPriceInBaseCurrency,
                                balance: coreLiquidityBalance
                            }),
                            ticker: ""
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/molecules/index.ts






;// CONCATENATED MODULE: ./src/components/index.ts



/***/ }),

/***/ 9334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5590);

var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    boxShadow: 24,
    borderRadius: 2,
    overflow: "hidden"
};
const mobileStyle = {
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "100vw",
    minHeight: "100vh",
    bgcolor: "background.paper",
    border: "none",
    borderColor: "transparent",
    boxShadow: 0,
    borderRadius: 0,
    overflow: "hidden"
};
Modal.defaultProps = {
    title: "Modal",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {
        children: "Modal content"
    })
};
function Modal(_a) {
    var { title  } = _a, props = __rest(_a, [
        "title"
    ]);
    const { isSm  } = (0,_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Modal, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: isSm ? mobileStyle : style,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                paddingLeft: 4,
                                variant: "h6",
                                component: "h2",
                                fontWeight: "bold",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                onClick: ()=>{
                                    if (props.onClose) {
                                        props.onClose({}, "backdropClick");
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.CloseRounded, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                    props.children
                ]
            })
        })
    });
}


/***/ }),

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DRAWER_WIDTH)
/* harmony export */ });
const DRAWER_WIDTH = 60;


/***/ }),

/***/ 5590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const useBreakPoint = ()=>{
    const isXs = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)((theme)=>theme.breakpoints.down("xs"));
    const isSm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)((theme)=>theme.breakpoints.down("sm"));
    const isMd = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const isLg = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)((theme)=>theme.breakpoints.down("lg"));
    return {
        isXs,
        isSm,
        isMd,
        isLg
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBreakPoint);


/***/ }),

/***/ 9704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

var PagePaths;
(function(PagePaths) {
    PagePaths["HOME"] = "/";
    PagePaths["ACCOUNT"] = "/account";
    PagePaths["UNIQS"] = "/uniqs";
})(PagePaths || (PagePaths = {}));
const usePageRedirect = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const goToHome = ()=>{
        router.push(PagePaths.HOME);
    };
    const goToAccount = ()=>{
        router.push(PagePaths.ACCOUNT);
    };
    const goToUniq = (uniqId)=>{
        router.push(`${PagePaths.UNIQS}/${uniqId}`);
    };
    // Add more functions as needed
    return {
        goToHome,
        goToAccount,
        goToUniq
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePageRedirect);


/***/ }),

/***/ 1206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HTMLHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
// Head metadata compoennt


function HTMLHead() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Ultra Alliance"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "A sick team of open-source developers working together to  elavate the Ultra Blockchain."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/uta-logo-purple.png"
            })
        ]
    });
}


/***/ }),

/***/ 3768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuBreadscrumb)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7185);
/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_usePageRedirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9704);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);








function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}
function MenuBreadscrumb() {
    const { goToHome  } = (0,_hooks_usePageRedirect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const params = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { uniqId  } = params.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "presentation",
        onClick: handleClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default()), {
            "aria-label": "breadcrumb",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    underline: "hover",
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"
                    },
                    color: "inherit",
                    onClick: ()=>goToHome(),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            style: {
                                marginRight: "4px"
                            },
                            src: "/uta-logo-purple.png",
                            alt: "logo",
                            width: 20,
                            height: 20
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block"
                                }
                            },
                            children: "Ultra Alliance"
                        })
                    ]
                }),
                uniqId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                    color: "text.primary",
                    children: [
                        "Factory #",
                        uniqId
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Appbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6345);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4752);
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9295);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Appbar__WEBPACK_IMPORTED_MODULE_3__]);
_Appbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//import Footer from "./Footer";




App.defaultProps = {
    footer: true,
    guilds: []
};
function App(props) {
    const { window , children , footer  } = props;
    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? ()=>window().document.body : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            backgroundColor: "secondary.main",
            minHeight: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Appbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                handleDrawerToggle: handleDrawerToggle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                mobileOpen: mobileOpen,
                container: container,
                guilds: props.guilds,
                handleDrawerToggle: handleDrawerToggle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: "main",
                sx: {
                    flexGrow: 1,
                    width: {
                        md: `calc(100% - ${_constants_dimensions__WEBPACK_IMPORTED_MODULE_6__/* .DRAWER_WIDTH */ .p}px)`
                    },
                    ml: {
                        md: `${_constants_dimensions__WEBPACK_IMPORTED_MODULE_6__/* .DRAWER_WIDTH */ .p}px`
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {}),
                            children
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            my: 3
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "secondary.main",
                            color: "white",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "fit-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "overline",
                                    textAlign: "center",
                                    color: "inherit",
                                    fontWeight: "bold",
                                    children: "Not endorsed by or affiliated with Ultra"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "body2",
                                    color: "inherit",
                                    children: [
                                        "Made with \uD83D\uDC9C by",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            href: "/",
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                textDecoration: "none",
                                                "&:hover": {
                                                    textDecoration: "underline"
                                                }
                                            },
                                            children: "Ultra Tech Alliance"
                                        }),
                                        " ",
                                        "- ",
                                        new Date().getFullYear()
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            my: 3
                        }
                    }),
                    footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Appbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2042);
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9295);
/* harmony import */ var _modals_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8227);
/* harmony import */ var _breadscrumbs_MenuBreadscrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3768);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modals_Login__WEBPACK_IMPORTED_MODULE_5__]);
_modals_Login__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Appbar({ handleDrawerToggle  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { isAuthenticated  } = (0,_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_4__/* .useUltra */ .Y5)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        elevation: 0,
        position: "fixed",
        sx: {
            bgcolor: "primary",
            width: {
                md: `calc(100% - ${_constants_dimensions__WEBPACK_IMPORTED_MODULE_8__/* .DRAWER_WIDTH */ .p}px)`
            },
            ml: {
                md: `${_constants_dimensions__WEBPACK_IMPORTED_MODULE_8__/* .DRAWER_WIDTH */ .p}px`
            },
            borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
                sx: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        color: "inherit",
                        onClick: handleDrawerToggle,
                        sx: {
                            mr: 2,
                            display: {
                                md: "none"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_breadscrumbs_MenuBreadscrumb__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        gap: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_Login__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2042);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_ViewCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7812);
/* harmony import */ var _mui_icons_material_ViewCarousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ViewCarousel__WEBPACK_IMPORTED_MODULE_5__);






function Footer() {
    var _a, _b, _c;
    const { ultra  } = (0,_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_3__/* .useUltra */ .Y5)();
    const { data , isLoading , fetchData  } = (0,_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_3__/* .useUltraQuery */ .CC)({
        queryFn: async ()=>{
            const info = await (ultra === null || ultra === void 0 ? void 0 : ultra.getInfo());
            if (!info) return undefined;
            return {
                info
            };
        }
    });
    // timer to reftech data each 5min, this is a hack to avoid the cache
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const timer = setInterval(()=>{
            fetchData();
        }, 20000); // 10sec = 10000
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        component: "footer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        direction: "column",
                        spacing: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: "/uta-logo-purple.png",
                            alt: "logo",
                            width: 120,
                            height: 120
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Zoom, {
                    in: !isLoading,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 9,
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.LinearProgress, {
                                variant: isLoading ? "indeterminate" : "determinate",
                                sx: {
                                    width: "100%",
                                    height: "4px",
                                    mb: 1
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                spacing: 1,
                                justifyContent: "space-between",
                                sx: {
                                    width: "100%"
                                },
                                alignItems: "center",
                                children: [
                                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                                        size: 20
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body2",
                                        color: "inherit",
                                        fontWeight: "bold",
                                        children: isLoading ? "Fetching blockchain info..." : `Head Block n°${(_a = data === null || data === void 0 ? void 0 : data.info) === null || _a === void 0 ? void 0 : _a.head_block_num}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "overline",
                                        color: "inherit",
                                        fontWeight: "bold",
                                        children: isLoading || !data ? "" : new Date((_b = data === null || data === void 0 ? void 0 : data.info) === null || _b === void 0 ? void 0 : _b.head_block_time).toLocaleString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                                sx: {
                                    width: "100%",
                                    display: "flex-wrap"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemButton, {
                                    disableGutters: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemAvatar, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                variant: "rounded",
                                                sx: {
                                                    bgcolor: "primary.light"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ViewCarousel__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                            primary: (_c = data === null || data === void 0 ? void 0 : data.info) === null || _c === void 0 ? void 0 : _c.head_block_producer,
                                            secondary: "Head Block Producer"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 4752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9295);
/* harmony import */ var _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6122);






Sidebar.defaultProps = {
    open: false,
    guilds: [],
    onClickUltra: ()=>{},
    onClickNewGuild: ()=>{},
    onClickTimeLine: ()=>{},
    mobileOpen: false,
    handleDrawerToggle: ()=>{},
    container: undefined
};
function Sidebar(props) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const renderDrawerHeader = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
            href: _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__/* .LINKS.DOWNLOAD_ULTRA */ .BA.DOWNLOAD_ULTRA,
            target: "_blank",
            sx: {
                minHeight: 48,
                position: "relative",
                width: "100%",
                justifyContent: "center",
                px: 1
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {
                sx: {
                    minWidth: 0,
                    mr: 0,
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    variant: "h6",
                    component: "div",
                    sx: {
                        color: "white"
                    },
                    children: "ᕫ"
                })
            })
        });
    };
    const renderListItem = (title, icon, link, imageSrc)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            title: title,
            placement: "right",
            arrow: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                disablePadding: true,
                sx: {
                    display: "block"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                    href: link,
                    target: "_blank",
                    sx: {
                        minHeight: 48,
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {
                        sx: {
                            minWidth: 0,
                            mr: "auto",
                            justifyContent: "center",
                            color: "white",
                            display: "flex",
                            alignItems: "center"
                        },
                        children: imageSrc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                            sx: {
                                backgroundColor: "secondary.light",
                                color: "white",
                                fontWeight: "bold"
                            },
                            variant: "rounded",
                            imgProps: {
                                style: {
                                    borderRadius: "50%"
                                }
                            },
                            srcSet: imageSrc
                        }) : icon
                    })
                })
            })
        });
    };
    const renderGuildListItem = (guild, index)=>{
        const title = guild.name;
        const imageSrc = guild.iconUrl;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            title: title,
            placement: "right",
            arrow: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                disablePadding: true,
                sx: {
                    display: "block"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                    selected: false,
                    sx: {
                        minHeight: 48,
                        justifyContent: "center",
                        px: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {
                        sx: {
                            minWidth: 0,
                            mr: "auto",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                            badgeContent: index % 2 == 0 ? 4 : 0,
                            color: "error",
                            variant: "dot",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                                sx: {
                                    backgroundColor: "secondary.light",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                variant: "rounded",
                                srcSet: imageSrc,
                                children: title[0]
                            })
                        })
                    })
                })
            })
        }, guild.id);
    };
    const renderSearchListItem = (text)=>{
        const icon = text === "Ultra Documentation" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__.Article, {
            fontSize: "large"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__.PageviewRounded, {
            fontSize: "large"
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            title: text,
            placement: "right",
            arrow: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                disablePadding: true,
                sx: {
                    display: "block"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                    selected: text === "Search",
                    sx: {
                        minHeight: 48,
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {
                        sx: {
                            minWidth: 0,
                            mr: "auto",
                            justifyContent: "center",
                            color: "white",
                            display: "flex",
                            alignItems: "center"
                        },
                        children: icon
                    })
                })
            })
        }, text);
    };
    const renderDrawer = ()=>{
        var _a;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
                    disableGutters: true,
                    sx: {
                        width: "auto",
                        position: "relative",
                        margin: "0px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        backgroundColor: "primary.main",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                        disablePadding: true,
                        sx: {
                            display: "block",
                            width: "100%"
                        },
                        children: renderDrawerHeader()
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
                    children: [
                        renderListItem("Ultra Times", undefined, _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__/* .LINKS.ULTRA_TIMES */ .BA.ULTRA_TIMES, "https://pbs.twimg.com/profile_images/1569433807580708867/JXHPG6Fa_400x400.jpg"),
                        renderListItem("Ultra is Life", undefined, _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__/* .LINKS.ULTRA_IS_LIFE */ .BA.ULTRA_IS_LIFE, "https://www.ultraislife.com/en/assets/icons/icon-72x72.png"),
                        renderListItem("Ultra Documentation", /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__.Article, {}), _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__/* .LINKS.ULTRA_DOCS */ .BA.ULTRA_DOCS, undefined),
                        renderListItem("Block Explorer", /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__.ViewCarouselRounded, {}), _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_4__/* .LINKS.ULTRA_EXPLORER */ .BA.ULTRA_EXPLORER, undefined),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                        (_a = props.guilds) === null || _a === void 0 ? void 0 : _a.map((guild, index)=>renderGuildListItem(guild, index))
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: "nav",
        sx: {
            width: {
                md: _constants_dimensions__WEBPACK_IMPORTED_MODULE_5__/* .DRAWER_WIDTH */ .p
            },
            flexShrink: {
                md: 0
            }
        },
        "aria-label": "mailbox folders",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
                container: props.container,
                variant: "temporary",
                open: props.mobileOpen,
                onClose: ()=>{
                    var _a;
                    return (_a = props.handleDrawerToggle) === null || _a === void 0 ? void 0 : _a.call(props);
                },
                ModalProps: {
                    keepMounted: true
                },
                sx: {
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none"
                    },
                    "& .MuiDrawer-paper": {
                        bgcolor: "background.default",
                        boxSizing: "border-box",
                        width: _constants_dimensions__WEBPACK_IMPORTED_MODULE_5__/* .DRAWER_WIDTH */ .p
                    }
                },
                children: renderDrawer()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
                variant: "permanent",
                sx: {
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: _constants_dimensions__WEBPACK_IMPORTED_MODULE_5__/* .DRAWER_WIDTH */ .p
                    }
                },
                open: true,
                children: renderDrawer()
            })
        ]
    });
}


/***/ }),

/***/ 9391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AvatarMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5590);
/* harmony import */ var _ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2042);
/* harmony import */ var _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6122);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function AvatarMenu() {
    var _a;
    const { logout , account  } = (0,_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_5__/* .useUltra */ .Y5)();
    const { isSm  } = (0,_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const onClickViewProfile = ()=>{
        // goToAccount(account?.name);
        handleClose();
    };
    const onClickLogout = ()=>{
        logout({
            throwOnError: true
        }).then(()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Logged out");
        });
        handleClose();
    };
    const menus = [
        // {
        //   name: "View Profile",
        //   icon: <AccountBoxRounded sx={{ mr: 2 }} />,
        //   onClick: onClickViewProfile,
        //   divider: true,
        // },
        {
            name: "Log out",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__.LogoutRounded, {
                sx: {
                    mr: 2
                }
            }),
            onClick: onClickLogout
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                direction: "row",
                spacing: 1,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            display: isSm ? "none" : "flex",
                            height: 22,
                            width: 22,
                            fontSize: 10,
                            color: "white",
                            fontWeight: "bold",
                            bgcolor: "primary.main"
                        },
                        children: "ᕫ"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "overline",
                        display: isSm ? "none" : "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    textTransform: "lowercase"
                                },
                                children: "x "
                            }),
                            (0,_ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_6__/* .formatUosBalance */ .qT)(((_a = account === null || account === void 0 ? void 0 : account.core_liquid_balance) === null || _a === void 0 ? void 0 : _a.split(" ")[0]) || 0)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        onClick: handleClick,
                        startIcon: isSm ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                            variant: "rounded",
                            sx: {
                                height: 28,
                                width: 28,
                                mr: isSm ? 0 : 0.5,
                                bgcolor: "primary.light"
                            }
                        }),
                        color: "secondary",
                        sx: {
                            color: "white"
                        },
                        variant: "text",
                        children: isSm && account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                            variant: "rounded",
                            sx: {
                                height: 28,
                                width: 28,
                                mr: isSm ? 0 : 0.5,
                                bgcolor: "primary.light"
                            }
                        }) : (0,_ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_6__/* .formatName */ .KY)({
                            name: (account === null || account === void 0 ? void 0 : account.account_name) || "",
                            num: 3
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                anchorEl: anchorEl,
                id: "account-menu",
                open: open,
                onClose: handleClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        borderColor: "divider",
                        borderWidth: 1,
                        borderStyle: "solid",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        }
                    }
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                children: menus.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                disabled: menu.disabled,
                                onClick: menu.onClick,
                                children: [
                                    menu.icon,
                                    " ",
                                    menu.name
                                ]
                            }, menu.name),
                            menu.divider && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {})
                        ]
                    }, menu.name))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2042);
/* harmony import */ var _components_modals_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9334);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6122);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9391);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_8__, _Account__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_8__, _Account__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











let window;
function Login({}) {
    const { ultra , login , isAuthenticated  } = (0,_ultra_alliance_react_ultra__WEBPACK_IMPORTED_MODULE_6__/* .useUltra */ .Y5)();
    const [address, setAddress] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleAddressChange = (event)=>{
        setAddress(event.target.value);
    };
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const onClickLogin = async ()=>{
        handleClose();
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.promise(login(address, {
            throwOnError: true
        }).catch((e)=>{
            throw e;
        }), {
            pending: "Logging in ...",
            success: "Logged in, welcome back!",
            error: "Failed to login"
        });
    // const id = toast.loading("Loading account info");
    // const response: any = await ultra.myFunction({ accountName: address });
    // toast.dismiss(id);
    // if (response.status === "success") {
    //   toast.success("Account info loaded");
    // } else {
    //   toast.error("Account info failed");
    // }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Account__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: handleOpen,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.AccountBoxRounded, {}),
                color: "secondary",
                sx: {
                    color: "white"
                },
                variant: "text",
                children: "Login"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: "Login to your Ultra account",
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        typeof (window === null || window === void 0 ? void 0 : window.ultra) === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            padding: 4,
                            direction: "column",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "modal-modal-description",
                                    children: "Access your Ultra guild builder tool and manage your projects with your ultra wallet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    variant: "contained",
                                    color: "primary",
                                    fullWidth: true,
                                    children: "Connect | ᕫ"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            bgcolor: "primary.main",
                            padding: 4,
                            direction: "column",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "modal-modal-title",
                                    variant: "h6",
                                    component: "h2",
                                    fontWeight: "bold",
                                    children: "Don't have a wallet ?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "modal-modal-description",
                                    children: "Now worries, you can dowload it securely from the official ᕫltra website"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    type: "link",
                                    variant: "contained",
                                    color: "secondary",
                                    fullWidth: true,
                                    href: _ultra_alliance_ultra_sdk__WEBPACK_IMPORTED_MODULE_9__/* .LINKS.DOWNLOAD_WALLET */ .BA.DOWNLOAD_WALLET,
                                    target: "_blank",
                                    children: [
                                        "Download wallet",
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            padding: 4,
                            direction: "column",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "modal-modal-description",
                                    children: "Or insert an account name and enter as view mode"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                    fullWidth: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                                        onChange: handleAddressChange,
                                        placeholder: "eg: ultra.nft.ft",
                                        size: "small"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    variant: "contained",
                                    color: "primary",
                                    onClick: onClickLogin,
                                    children: "Log-in"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;