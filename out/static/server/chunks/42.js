"use strict";
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 2042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Mf": () => (/* reexport */ currencies),
  "o2": () => (/* reexport */ providers_UltraProvider),
  "GP": () => (/* reexport */ hooks_useLocalisation),
  "Y5": () => (/* reexport */ hooks_useUltra),
  "CC": () => (/* reexport */ hooks_useUltraQuery)
});

// UNUSED EXPORTS: LANGUAGES, LocalisationContext, LocalisationProvider, UltraContext

;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/constants/currencies/index.js
// istanbul ignore file
/**
 * @description
 * List of currencies supported by the app.
 * @category Constants
 * @type {tCurrency[]}
 * @memberof Constants
 * @constant
 * @name CURRENCIES
 * @example
 * import { CURRENCIES } from '@ultra-utilities/react-ultra';
 */
const CURRENCIES = [
    {
        id: 0,
        symbol: 'ᕫ',
        ticker: 'UOS',
        name: 'Ultra',
        native: true,
    },
    {
        id: 1,
        symbol: '$',
        ticker: 'USD',
        name: 'US Dollar',
        native: false,
    },
    {
        id: 2,
        symbol: '€',
        ticker: 'EUR',
        name: 'Euro',
        native: false,
    },
    {
        id: 3,
        symbol: '£',
        ticker: 'GBP',
        name: 'British Pound',
        native: false,
    },
];
/* harmony default export */ const currencies = (CURRENCIES);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/constants/languages/index.js
// istanbul ignore file
/**
 * List of languages
 * @type {tLanguage[]}
 * @category Constants
 * @constant
 * @default
 * @public
 * @readonly
 * @example
 * import { LANGUAGES } from '@ultra-alliance/react-ultra';
 */
const LANGUAGES = [
    {
        code: 'US',
        label: 'English',
    },
    {
        code: 'FR',
        label: 'French',
    },
    {
        code: 'ES',
        label: 'Spanish',
    },
];
/* harmony default export */ const languages = (LANGUAGES);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/constants/index.js
// istanbul ignore file


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/contexts/LocalisationContext/index.js
// istanbul ignore file
/* eslint-disable @typescript-eslint/no-empty-function */


/**

LocalisationContext is a React context created using React.createContext.
The context provides the current base currency and base language, as well as functions to update the selected currency and language.
@category Context
*/
const LocalisationContext = external_react_default().createContext({
    baseCurrency: currencies[0],
    baseLanguage: languages[0],
    /**
  
  An empty function to update the language.
  */
    updateLanguage() { },
    /**
  
  An empty function to update the currency.
  */
    updateCurrency() { },
});
/* harmony default export */ const contexts_LocalisationContext = (LocalisationContext);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/contexts/UltraContext/index.js

/**
 * `UltraContext` is a React context created using `React.createContext`. The context provides the `tUltraContext` object, which includes the `ultra`, `auth`, and `account` states, as well as functions to log in, log out, and update the BP API endpoint.
 *
 * @category Context
 * @returns An object of type `tUltraContext`.
 *
 */
const UltraContext = external_react_default().createContext(null);
/* harmony default export */ const contexts_UltraContext = (UltraContext);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/contexts/index.js
// istanbul ignore file



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/hooks/useLocalisation/index.js
// istanbul ignore file


/**
 * A custom React Hook that provides access to the `tLocalisationContext`.
 * @category Hooks
 * @returns An object of type `tLocalisationContext`.
 * @throws An error if used outside the `LocalisationProvider`.
 */
const useLocalisation = () => {
    const context = external_react_default().useContext(contexts_LocalisationContext);
    if (!context) {
        throw Error('useLocalisation must be used inside an LocalisationProvider');
    }
    return context;
};
/* harmony default export */ const hooks_useLocalisation = (useLocalisation);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/hooks/useUltra/index.js


/**
 * A custom React Hook that provides access to the {@link tUltraContext}.
 *
 * @returns An object of type {@link tUltraContext}.
 * @category Hooks
 * @throws An error if used outside the {@link UltraContext}.
 */
const useUltra = () => {
    const context = external_react_default().useContext(contexts_UltraContext);
    if (!context) {
        throw Error('useUltra must be used inside an UltraProvider');
    }
    return context;
};
/* harmony default export */ const hooks_useUltra = (useUltra);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/hooks/useUltraQuery/index.js

/**
 * A custom React Hook that accepts a `queryFn` function that returns a Promise with data and a `callback` function that accepts that data as an argument.
 *
 * @category Hooks
 * @param queryFn - A function that returns a Promise with an unknown value.
 * @param callback - A function that accepts an unknown value and returns void.
 * @param autofetch - A boolean indicating whether to automatically fetch data on mount.
 *
 * @returns An object with `data`, `isLoading`, `error`, and `fetchData` properties.
 *
 * @example
 * ```tsx
 * const { data, isLoading, error, fetchData } = useUltraQuery({
 *  queryFn: async () => {
 *   const response = await ultra.getUosBalance("ultra.nft.ft");
 *  return response;
 * },
 * callback: (data) => {
 *  console.log(data);
 * },
 * autofetch: true,
 * });
 * ```
 *
 *
 */
const useUltraQuery = ({ queryFn, callback, onError, autofetch = true, }) => {
    const [data, setData] = (0,external_react_.useState)(undefined);
    const [error, setError] = (0,external_react_.useState)(null);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(autofetch);
    const fetchData = (0,external_react_.useCallback)(async () => {
        setIsLoading(true);
        try {
            console.log(error);
            const result = await queryFn();
            setData(result);
            if (callback) {
                callback(result);
            }
        }
        catch (error) {
            console.log(error);
            setError(error);
            if (onError) {
                onError(error);
            }
        }
        setIsLoading(false);
    }, [callback, error, queryFn]);
    (0,external_react_.useEffect)(() => {
        if (autofetch) {
            void fetchData();
        }
    }, []);
    return { data, isLoading, error, fetchData };
};
/* harmony default export */ const hooks_useUltraQuery = (useUltraQuery);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/hooks/index.js
// istanbul ignore file



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/providers/LocalisationProvider/index.js
// istanbul ignore file



/**
 * A custom React component that provides a `LocalisationContext` with `baseCurrency`, `baseLanguage`, `updateCurrency`, and `updateLanguage` properties.
 * This component is used inside the {@link UltraProvider} component.
 *
 * @category Providers
 * @param children - Child components to render.
 *
 * @returns A `LocalisationContext` provider.
 */
const LocalisationProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = external_react_default().useState(currencies[0]);
    const [baseLanguage, setBaseLanguage] = external_react_default().useState(languages[0]);
    external_react_default().useEffect(() => {
        const currency = window.localStorage.getItem('baseCurrency');
        const language = window.localStorage.getItem('baseLanguage');
        if (currency) {
            setBaseCurrency(JSON.parse(currency));
        }
        if (language) {
            setBaseLanguage(JSON.parse(language));
        }
    }, []);
    const updateCurrency = (currency) => {
        setBaseCurrency(currency);
        window.localStorage.setItem('baseCurrency', JSON.stringify(currency));
    };
    const updateLanguage = (language) => {
        setBaseLanguage(language);
        window.localStorage.setItem('baseLanguage', JSON.stringify(language));
    };
    return (external_react_default().createElement(contexts_LocalisationContext.Provider, { value: {
            baseCurrency,
            baseLanguage,
            updateCurrency,
            updateLanguage,
        } }, children));
};
/* harmony default export */ const providers_LocalisationProvider = (LocalisationProvider);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/index.js + 43 modules
var esm = __webpack_require__(6122);
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/providers/UltraProvider/index.js
// istanbul ignore file




/**
 * The `UltraProvider` component provides authentication and account management functionality using the Ultra SDK
 * @category Providers
 * @param children The child components to wrap with the provider.
 * @param bpApiEndpoint The base URL for the Block Producer API endpoint.
 * @returns A React component that provides an `UltraContext` containing the Ultra SDK object, authentication state, and related methods.
 */
const UltraProvider = ({ children, bpApiEndpoint }) => {
    const [ultra, setUltra] = external_react_default().useState(new esm/* Ultra */.eV({
        bpApiEndpoint,
    }));
    const [auth, setAuth] = external_react_default().useState(esm/* INITIAL_AUTH */.bL);
    const [account, setAccount] = external_react_default().useState(undefined);
    const login = external_react_default().useCallback(async (accountName, { throwOnError, onError, onSuccess, onComplete } = {}) => {
        setAuth({
            state: esm/* eAuthState.AUTHENTICATING */.Hl.AUTHENTICATING,
            error: null,
        });
        try {
            const account = await (ultra === null || ultra === void 0 ? void 0 : ultra.getAccount({ accountName }));
            if (!account) {
                throw new Error('Account not found');
            }
            setAuth({
                state: esm/* eAuthState.AUTHENTICATED */.Hl.AUTHENTICATED,
                error: null,
            });
            setAccount(account);
            if (onSuccess) {
                onSuccess(account);
            }
            return account;
        }
        catch (error) {
            setAuth({ state: esm/* eAuthState.ERROR */.Hl.ERROR, error });
            if (throwOnError) {
                throw error;
            }
            if (onError) {
                onError(error);
            }
            return undefined;
        }
        finally {
            if (onComplete) {
                onComplete();
            }
        }
    }, []);
    const logout = external_react_default().useCallback(async ({ throwOnError, onError, onSuccess, onComplete, } = {}) => {
        setAuth({
            state: esm/* eAuthState.AUTHENTICATING */.Hl.AUTHENTICATING,
            error: null,
        });
        try {
            setAuth({ state: esm/* eAuthState.UNAUTHENTICATED */.Hl.UNAUTHENTICATED, error: null });
            setAccount(undefined);
            if (onSuccess) {
                onSuccess();
            }
        }
        catch (error) {
            setAuth({ state: esm/* eAuthState.ERROR */.Hl.ERROR, error });
            if (throwOnError) {
                throw error;
            }
            if (onError) {
                onError(error);
            }
        }
        finally {
            if (onComplete) {
                onComplete();
            }
        }
    }, []);
    const updateBpApiEndpoint = external_react_default().useCallback(async () => {
        setUltra(new esm/* Ultra */.eV({
            bpApiEndpoint,
        }));
    }, [bpApiEndpoint]);
    external_react_default().useEffect(() => {
        try {
            const currentAccount = account;
            if (currentAccount) {
                setAuth({
                    state: esm/* eAuthState.AUTHENTICATED */.Hl.AUTHENTICATED,
                    error: null,
                });
                setAccount(currentAccount);
            }
            else {
                throw new Error('Let it catch');
            }
        }
        catch (error) {
            setAuth({
                state: esm/* eAuthState.UNAUTHENTICATED */.Hl.UNAUTHENTICATED,
                error: null,
            });
            setAccount(undefined);
        }
    }, []);
    const isAuthenticated = auth.state === esm/* eAuthState.AUTHENTICATED */.Hl.AUTHENTICATED;
    const isUnauthenticated = auth.state === esm/* eAuthState.UNAUTHENTICATED */.Hl.UNAUTHENTICATED;
    const isAuthenticating = auth.state === esm/* eAuthState.AUTHENTICATING */.Hl.AUTHENTICATING;
    const hasAuthError = auth.state === esm/* eAuthState.ERROR */.Hl.ERROR;
    const isLoggingOut = auth.state === esm/* eAuthState.LOGGING_OUT */.Hl.LOGGING_OUT;
    const isAuthUndefined = auth.state === esm/* eAuthState.UNDEFINED */.Hl.UNDEFINED;
    return (external_react_default().createElement(providers_LocalisationProvider, null,
        external_react_default().createElement(contexts_UltraContext.Provider, { value: {
                ultra,
                auth,
                account,
                login,
                logout,
                isAuthenticated,
                isUnauthenticated,
                isAuthenticating,
                hasAuthError,
                isLoggingOut,
                isAuthUndefined,
                updateBpApiEndpoint,
            } }, children)));
};
/* harmony default export */ const providers_UltraProvider = (UltraProvider);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/providers/index.js
// istanbul ignore file



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/react-ultra/dist/esm/index.js
// istanbul ignore file
/**
 * <img alt='' src='https://img.shields.io/badge/NOT PUBLISHED-100000?style=for-the-badge&logo=&logoColor=e57373&labelColor=FFFFFF&color=e57373'/>
 * @license MIT
 * @module react-ultra
 * @description
 * React Ultra is a collection of React hooks and components for building
 * performant, scalable, and accessible applications connected to the UOS.
 *
 * The package wrap {@link ultra-sdk}
 *
 * ## ⚙️ Quick Start
 *
 * Make sure to have `react`, `react-dom`, `@ultra-alliance/ultra-sdk` installed as dependencies, then install `react-ultra`.
 *
 * In short:
 * ```bash
 * npm install react react-dom @ultra-alliance/ultra-sdk @ultra-alliance/react-ultra
 * ```
 *
 * Then wrap your app in a `<UltraProvider>`, and provide a `bpApiEndpoint` (default will be `DEFAULT_BP_API_ENDPOINT` from {@link ultra-sdk})}):
 *
 * ```typescript
 * import { UltraProvider } from '@ultra-alliance/react-ultra';
 *
 * React.DOM.render(
 * <UltraProvider bpApiEndpoint='ANY_PUBLIC_ULTRA_ENDPOINT'>
 *  <App />
 * </UltraProvider>,
 * document.getElementById('root')
 * );
 * ```
 *
 * And call the hooks inside your app:
 *
 * ```typescript
 * import { useUltra } from '@ultra-alliance/react-ultra';
 *
 * const App = () => {
 *  const {account, isAuthenticated, login } = useUltra();
 *
 *  if (!isAuthenticated) {
 *    return <button onClick={login}>Login</button>;
 *  }
 *
 *  return <div>UOS BALANCE: {account.core_liquid_balance}</div>;
 * };
 * ```
 *
 * ## 🚀 Usage
 *
 * ### Wrap your app in a `<UltraProvider>`
 *
 * In order to use the hooks, you need to wrap your app in a `<UltraProvider>`, and provide a `bpApiEndpoint`.:
 *
 * ```typescript
 * <UltraProvider bpApiEndpoint='ANY_PUBLIC_ULTRA_ENDPOINT'>
 *    <App />
 * </UltraProvider>
 * ```
 *
 * This will provide the context to the hooks.
 *
 * Now you can use the hooks inside your app:
 *
 * - {@link useUltra} for account data and authentication.
 *
 * - {@link useUltraQuery} for easily querying the UOS.
 *
 * - {@link useLocalisation} for utils about languages and base currency.
 */





// export * from './types';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bL": () => (/* reexport */ INITIAL_AUTH),
  "BA": () => (/* reexport */ LINKS),
  "eV": () => (/* reexport */ ultra_class),
  "gn": () => (/* reexport */ calculs_calcPercentFromBasisPoint),
  "H_": () => (/* reexport */ calculs_calcTotalPrice),
  "s5": () => (/* reexport */ calculs_calcTotalResaleShare),
  "Hl": () => (/* reexport */ eAuthState),
  "jc": () => (/* reexport */ formatters_formatBasisPoint),
  "ME": () => (/* reexport */ formatters_formatCurrencyValue),
  "KY": () => (/* reexport */ formatters_formatName),
  "qT": () => (/* reexport */ formatters_formatUosBalance),
  "HX": () => (/* reexport */ verifiers_isUltraAccount)
});

// UNUSED EXPORTS: BP_API_ENDPOINTS, DEFAULT_BP_API_ENDPOINT, eUltraAccount, formatComputeUnit, formatNumeralAbreviation, formatTimeSinceNow, get, getAbi, getAccount, getBlock, getCurrencyBalance, getInfo, getListedUniqs, getTableByScope, getTableRows, getUniqDetail, getUniqManifested, getUniqsOwned, getUosBalance, getZipContent, handleUltraError, http, post, put

;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/calculs/calcTotalPrice/index.js
/**
 * @alpha
 * @name calcTotalPrice
 * @category Calculations
 * @param {tCalcTotalPrice} args
 * @returns `number` - The total value price of the user token balance.
 * @description
 * This function calculates the value of a token based on the base price
 * and the balance of the token.
 * @example
 * ```typescript
 * const args = {
 *    balance: 100,
 *    basePrice: 0.01
 * };
 *
 * const result = calcTotalPrice(args);
 * console.log(result);
 * // 1
 * ```
 */
const calcTotalPrice = ({ balance, basePrice }) => {
    return Number(parseFloat(balance.toString())) * Number(basePrice !== null && basePrice !== void 0 ? basePrice : 1);
};
/* harmony default export */ const calculs_calcTotalPrice = (calcTotalPrice);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../ultra-utilities/node_modules/numeral/numeral.js
var numeral_numeral = __webpack_require__(7183);
var numeral_default = /*#__PURE__*/__webpack_require__.n(numeral_numeral);
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatCurrencyValue/index.js

/**
 * @alpha
 * @category Formatters
 * @name formatCurrencyValue
 * @param {tFormatCurrencyValue} args
 * @returns `string` - formatted currency value
 * @description
 * Formats a currency value to a string with a ticker
 * @example
 * ```typescript
 * import { formatCurrencyValue } from '@ultra-alliance/ultra-sdk';
 *
 * const formattedValue = formatCurrencyValue({
 *  value: 1000.55,
 *  ticker: 'oscar'
 * });
 *
 * // formattedValue = 'oscar 1,000.55'
 * ```
 */
function formatCurrencyValue({ value, ticker }) {
    let formattedValue = '';
    if (ticker) {
        formattedValue = ticker + ' ';
    }
    formattedValue += numeral_default()(value).format('0,0.00');
    return formattedValue;
}
/* harmony default export */ const formatters_formatCurrencyValue = (formatCurrencyValue);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatNumeralAbreviation/index.js

/**
 * @alpha
 * @category Formatters
 * @name formatNumeralAbreviation
 * @param `number` - count to format
 * @returns `string` formatted count
 * @description
 * Formats a number to a short form with a letter abreviation
 * @example
 * ```typescript
 * import { formatNumeralAbreviation } from '@/ult-alliance/ultra-sdk';
 *
 * formatNumeralAbreviation(1000); // 1K
 * formatNumeralAbreviation(1000000); // 1M
 * ```
 */
function formatNumeralAbreviation(count) {
    return numeral(Math.floor(count !== null && count !== void 0 ? count : 0))
        .format('0.a')
        .toLocaleUpperCase();
}
/* harmony default export */ const formatters_formatNumeralAbreviation = ((/* unused pure expression or super */ null && (formatNumeralAbreviation)));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatName/index.js
/**
 * @alpha
 * @category Formatters
 * @name formatName
 * @param {tFormatName} args
 * @returns `string` formatted name
 * @description
 * Format a name to a specified length
 * @example
 * ```typescript
 * import { formatName } from '@ultra-alliance/ultra-sdk';
 *
 * const args = {
 *    name: 'accountname',
 *    num: 3
 * };
 *
 * const result = formatName(args);
 * console.log(result);
 * // acc...ame
 * ```
 */
function formatName({ name, num = 3 }) {
    const formattedAccountName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (num === 0) {
        return formattedAccountName;
    }
    if (formattedAccountName.length <= num * 2) {
        return formattedAccountName;
    }
    // Otherwise, truncate the string to the first num characters followed by '...' and the last num characters
    return (formattedAccountName.slice(0, num) +
        '...' +
        formattedAccountName.slice(-num));
}
/* harmony default export */ const formatters_formatName = (formatName);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatComputeUnit/index.js

/**
 * @alpha
 * @category Formatters
 * @name formatComputeUnit
 * @param number quota
 * @returns `string` formatted compute unit
 * @description
 * Formats a number to a human readable compute unit
 * @example
 * ```typescript
 * import { formatComputeUnit } from '@ultra-alliance/ultra-sdk';
 *
 * formatComputeUnit(1048576) // 1.05 MB
 * formatComputeUnit(1073741824) // 1.07 GB
 * ```
 */
function formatComputeUnit(quota) {
    return numeral(Math.floor(quota)).format('0.00 b');
}
/* harmony default export */ const formatters_formatComputeUnit = ((/* unused pure expression or super */ null && (formatComputeUnit)));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatUosBalance/index.js
// istanbul ignore file

/**
 * @alpha
 * @category Formatters
 * @name formatUosBalance
 * @param  balance - Balance to format
 * @returns  Formatted UOS balance
 * @description
 * Formats a UOS balance to a human readable format
 * @example
 * ```typescript
 * import { formatUosBalance } from '@ultra-alliance/ultra-sdk';
 *
 * const formattedBalance = formatUosBalance('10000000');
 * // formattedBalance = '10.00 K'
 * ```
 */
function formatUosBalance(balance) {
    let toFormat = 0;
    if (typeof balance === 'string') {
        toFormat = parseFloat(balance.split(' ')[0]);
    }
    else {
        toFormat = balance;
    }
    return numeral_default()(toFormat).format('(0.00 a)');
}
/* harmony default export */ const formatters_formatUosBalance = (formatUosBalance);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../ultra-utilities/node_modules/moment/moment.js
var moment_moment = __webpack_require__(2249);
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatTimeSinceNow/index.js

/**
 * @alpha
 * @category Formatters
 * @name formatTimeSinceNow
 * @param {string | undefined} date - Date to format
 * @returns {string} - Formatted date
 * @description
 * Formats a date to show how many days ago it was
 * @example
 * ```typescript
 * import { formatTimeSinceNow } from '@ultra-alliance/ultra-sdk';
 * import moment from 'moment';
 *
 * const now = moment().toISOString();
 * const result = formatTimeSinceNow(now);
 * // result = '0 day(s) ago'
 * ```
 */
function formatTimeSinceNow(date) {
    if (!date) {
        return 'Unknown';
    }
    const momentCreatedDate = moment(date);
    const momentNow = moment();
    const diffInDays = momentNow.diff(momentCreatedDate, 'days');
    return `${diffInDays} day(s) ago`;
}
/* harmony default export */ const formatters_formatTimeSinceNow = ((/* unused pure expression or super */ null && (formatTimeSinceNow)));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/formatBasisPoint/index.js

/**
 * @alpha
 * @category Formatters
 * @name formatBasisPoint
 * @param basisPoint -  basis point to format
 * @returns `string` - formatted basis point as a percentage
 * @description
 * Formats a basis point value to a string with a percentage
 * @example
 * ```typescript
 * import { formatBasisPoint } from '@ultra-alliance/ultra-sdk';
 *
 * const formattedBasisPoint = formatBasisPoint(
 *  basisPoint: 600
 * );
 *
 * // formattedBasisPoint = '6.00%'
 * ```
 */
function formatBasisPoint(basisPoint) {
    const percentage = (basisPoint / 100).toFixed(2);
    return numeral_default()(percentage).format('0.00') + '%';
}
/* harmony default export */ const formatters_formatBasisPoint = (formatBasisPoint);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/formatters/index.js
/* istanbul ignore file */
/**
 * @module ultra-sdk
 * @description
 * Functions to format values
 * */







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/calculs/calcTotalResaleShare/index.js

function calcTotalResaleShare(resaleShares) {
    const totalBasisPoints = resaleShares.reduce((acc, cur) => acc + cur.basis_point, 0);
    return {
        basis_point: totalBasisPoints,
        formatted: formatters_formatBasisPoint(totalBasisPoints),
    };
}
/* harmony default export */ const calculs_calcTotalResaleShare = (calcTotalResaleShare);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/calculs/calcPercentFromBasisPoint/index.js
/**
 * @alpha
 * @category Calculations
 * @name calcPercentFromBasisPoint
 * @param {tCalcPercentFromBasisPoint} args
 * @returns `number` - calculated percentage value
 * @description
 * Calculates the percentage value for a given basis point and number value.
 * @example
 * ```typescript
 * import { calcPercentFromBasisPoint } from '@ultra-alliance/ultra-sdk';
 *
 * const percent = calcPercentFromBasisPoint({
 *  basis_point: 600,
 *  value: 100
 * });
 *
 * // percent = 6
 * ```
 */
function calcPercentFromBasisPoint({ basis_point, value, }) {
    return (basis_point / 10000) * value;
}
/* harmony default export */ const calculs_calcPercentFromBasisPoint = (calcPercentFromBasisPoint);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/calculs/index.js
/* istanbul ignore file */
/**
 * @module ultra-sdk
 * @description
 * Functions to calculate values
 */



//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../ultra-utilities/node_modules/jszip/lib/index.js
var lib = __webpack_require__(641);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/meta-data/getZipContent/index.js
// istanbul ignore file

/**
 * @category Metadata
 * @param {string} url - URL of the ZIP file
 * @returns {Promise<{ manifest: tManifest }>} - manifest.json and image urls
 * @description
 * Retrieve manifest.json and image urls from a ZIP file
 * @example
 * ```typescript
 * import { getZipContent } from '@ultra-alliance/ultra-sdk';
 *
 * const url = 'https://example.com/zip-file.zip';
 *
 * const { manifest } = await getZipContent(url);
 * ```
 */
async function getZipContent(url) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const response = await fetch(url);
    const blob = await response.blob();
    const zip = await lib_default().loadAsync(blob);
    // Retrieve manifest.json
    const manifestJson = await ((_a = zip.file('manifest.json')) === null || _a === void 0 ? void 0 : _a.async('text'));
    if (!manifestJson) {
        throw new Error('manifest.json not found in ZIP file');
    }
    // Parse manifest.json to get image and text paths
    const manifest = JSON.parse(manifestJson);
    const { media } = manifest;
    const { images } = media;
    const productImage = images === null || images === void 0 ? void 0 : images.product;
    const squareImage = images === null || images === void 0 ? void 0 : images.square;
    const heroImage = images === null || images === void 0 ? void 0 : images.hero;
    const galleryImages = (_b = media === null || media === void 0 ? void 0 : media.gallery) !== null && _b !== void 0 ? _b : [];
    // Retrieve image urls
    if (productImage) {
        const productImageFile = zip.file(productImage);
        if (productImageFile) {
            const productImageUrl = URL.createObjectURL(await productImageFile.async('blob'));
            if (productImageUrl && ((_d = (_c = manifest === null || manifest === void 0 ? void 0 : manifest.media) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.product)) {
                manifest.media.images.product = productImageUrl;
            }
        }
    }
    if (squareImage) {
        const squareImageFile = zip.file(squareImage);
        if (squareImageFile) {
            const squareImageUrl = URL.createObjectURL(await squareImageFile.async('blob'));
            if (squareImageUrl && ((_f = (_e = manifest.media) === null || _e === void 0 ? void 0 : _e.images) === null || _f === void 0 ? void 0 : _f.square)) {
                manifest.media.images.square = squareImageUrl;
            }
        }
    }
    if (heroImage) {
        const heroImageFile = zip.file(heroImage);
        if (heroImageFile) {
            const heroImageUrl = URL.createObjectURL(await heroImageFile.async('blob'));
            if (heroImageUrl && ((_h = (_g = manifest.media) === null || _g === void 0 ? void 0 : _g.images) === null || _h === void 0 ? void 0 : _h.hero)) {
                manifest.media.images.hero = heroImageUrl;
            }
        }
    }
    const galleryUrls = await Promise.all(galleryImages.map(async (galleryImage) => {
        const galleryImageFile = zip.file(galleryImage);
        if (galleryImageFile) {
            const galleryImageUrl = URL.createObjectURL(await galleryImageFile.async('blob'));
            if (galleryImageUrl) {
                return galleryImageUrl;
            }
        }
        return '';
    }));
    manifest.media.gallery = galleryUrls;
    return { manifest };
}
/* harmony default export */ const meta_data_getZipContent = (getZipContent);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/meta-data/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/verifiers/constants/index.js
// istanbul ignore file
//
/**
 * An enumeration of official Ultra accounts.
 *
 * @category Verifiers
 */
var eUltraAccount;
(function (eUltraAccount) {
    eUltraAccount["ultra.nft.ft"] = "Ultra";
    eUltraAccount["ultra.royal"] = "Ultra Royal";
})(eUltraAccount || (eUltraAccount = {}));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/verifiers/isUltraAccount/index.js

/**
 * Determines if a given account string is a valid ultra account based on the values
 * of the {@link eUltraAccount} enum.
 *
 * @param account - The account string to check.
 * @returns `true` if the account string is a valid ultra account, `false` otherwise.
 */
function isUltraAccount(account) {
    if (account.includes('ultra')) {
        return true;
    }
    const ultraAccountKeys = Object.keys(eUltraAccount);
    return ultraAccountKeys.includes(account);
}
/* harmony default export */ const verifiers_isUltraAccount = (isUltraAccount);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/verifiers/index.js
// istanbul ignore file


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/utilities/index.js
/* istanbul ignore file */





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/constants/index.js
/**
 * @category Ultra Queries
 * @description
 * The default endpoint for the block producers API.
 */
const DEFAULT_BP_API_ENDPOINT = 'https://api.ultra.eossweden.org';
/**
 * @category Ultra Queries
 * @description
 * The endpoints for the block producers API available in mainnet and testnet.
 */
const BP_API_ENDPOINTS = {
    main: [
        'http://ultra.api.eosnation.io',
        'https://ultra.eosrio.io',
        'https://api.ultra.cryptolions.io',
        'https://ultra-api.eoseoul.io',
        'https://uos.eosusa.news',
        DEFAULT_BP_API_ENDPOINT,
    ],
    test: [
        'https://ultratest-api.eoseoul.io',
        'http://ultratest.api.eosnation.io',
        'https://testnet.ultra.eosrio.io',
        'https://test.uos.eosusa.news',
        'https://api.ultra-testnet.cryptolions.io',
        'https://api.testnet.ultra.eossweden.org',
    ],
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/fetch/http/index.js
/**
 * @name http
 * @category API Commons
 * @param {string} path - The path to the resource.
 * @param {object} config - The configuration object.
 * @returns {Promise} - The response object.
 * @description
 * This function is a wrapper for the fetch api.
 * @example
 * http({
 *  path: 'https://jsonplaceholder.typicode.com/todos/9999999',
 * config: {},
 * })
 * .then((response) => {
 * console.log(response);
 * })
 * .catch((error) => {
 * console.log(error);
 * });
 * @example
 * const response = await http({
 * path: 'https://jsonplaceholder.typicode.com/todos/9999999',
 * config: {},
 * });
 * console.log(response);
 */
async function http({ path, config }) {
    const response = await fetch(path, config);
    if (!(response === null || response === void 0 ? void 0 : response.ok)) {
        throw new Error(`${response.statusText}`);
    }
    const body = (await response.json());
    return body;
}
/* harmony default export */ const fetch_http = (http);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/fetch/get/index.js

/**
 * @name get
 * @category API Commons
 * @param {string} path - The path to the API endpoint
 * @param {object} config - The config object to pass to the fetch API
 * @returns {Promise} - The response from the API
 * @description
 * This function is used to make a GET request to the API.
 * It is a wrapper around the http function.
 * @example
 * ```typescript
 * import { get } from '@ultra-alliance/ultra-sdk';
 *
 * const response = await get({
 *  path: '/example',
 *  config: {},
 * });
 *
 * console.log(response);
 * ```
 */
async function get({ path, config }) {
    const init = Object.assign({ method: 'GET' }, config);
    const res = (await fetch_http({
        path,
        config: init,
    }));
    return res;
}
/* harmony default export */ const fetch_get = (get);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/fetch/post/index.js

/**
 * @name post
 * @category API Commons
 * @param {tPost} params - The parameters for the POST request
 * @returns {Promise} - The response from the server
 * @description This function is used to make a POST request to the server.
 * It is a wrapper around the fetch API.
 * @example
 * ```typescript
 * import { post } from '@ultra-alliance/ultra-sdk';
 *
 * const response = await post({
 *   path: '/example',
 *   body: {
 *     example: 'example',
 *    },
 *   config: {},
 *  });
 * console.log(response);
 * ```
 */
async function post({ path, body, config }) {
    const init = Object.assign({ method: 'POST', body: JSON.stringify(body) }, config);
    const res = await fetch_http({
        path,
        config: init,
    });
    return res;
}
/* harmony default export */ const fetch_post = (post);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/fetch/index.js
/* istanbul ignore file */




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/commons/index.js
/* istanbul ignore file */




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getAbi/index.js

/**
 * @name getAbi
 * @category Ultra Queries
 * @param {tGetAbi} params -account name and bp api endpoint
 * @returns {Promise<tGetAbiOutput>} - abi information
 * @description Returns information about a smart contract’s available actions, tables, etc.
 * @example
 * ```typescript
 * import { getBlock } from '@ultra-alliance/ultra-sdk';
 *
 * const accountName = 'ultra';
 *
 * (async () => {
 *  const result = await getBlock({
 *   blockNumOrId,
 *  bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *  console.log('result', result);
 * })();
 * ```
 */
const getAbi = async ({ accountName, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_abi`,
    body: { account_name: accountName },
    config: {},
});
/* harmony default export */ const queries_getAbi = (getAbi);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getAccount/index.js

/**
 * @name getAccount
 * @category Ultra Queries
 * @param {tGetAccount} params - account name and bp api endpoint
 * @returns {Promise<tGetAccountOutput>} - account information
 * @description Get account information
 * @example
 * ```typescript
 * import { getAccount } from '@ultra-alliance/sdk';
 *
 * const accountName = 'ultra';
 *
 * (async () => {
 *  const result = await getAccount({
 *   accountName,
 *  bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *  console.log('result', result);
 * })();
 *
 *
 */
const getAccount = async ({ accountName, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_account`,
    body: { account_name: accountName },
    config: {},
});
/* harmony default export */ const queries_getAccount = (getAccount);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getBlock/index.js

/**
 * @name getBlock
 * @category Ultra Queries
 * @param {tGetBlock} params - block num or id and bp api endpoint
 * @returns {Promise<tGetAccountOutput>} - account information
 * @description Get block information
 * @example
 * ```typescript
 * import { getBlock } from '@ultra-alliance/sdk';
 *
 * const accountName = 'ultra';
 *
 * (async () => {
 *  const result = await getBlock({
 *   blockNumOrId,
 *  bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *  console.log('result', result);
 * })();
 * ```
 */
const getBlock = async ({ blockNumOrId, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_block`,
    body: { block_num_or_id: blockNumOrId },
    config: {},
});
/* harmony default export */ const queries_getBlock = (getBlock);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getCurrencyBalance/index.js

/**
 * @name getCurrencyBalance
 * @category Ultra Queries
 * @param {tGetCurrencyBalance} params - code, account, symbol and bp api endpoint
 * @returns {Promise<tGetAbiOutput>} - get currency balance
 * @description Returns the current currency balance for a given token contract, account, and a token symbol.
 * @example
 * ```typescript
 * import { getCurrencyBalance } from '@ultra-alliance/ultra-sdk';
 *
 * const result = await getBlock({
 *      account: 'ultra.nft.ft',
 *      code: 'eosio.token',
 *      symbol: 'UOS',
 *      bpApiEndpoint: 'https://api.ultrain.io',
 * });
 * console.log('result', result);
 * ```
 */
const getCurrencyBalance = async ({ code, account, symbol, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_currency_balance`,
    body: { code, account, symbol },
    config: {},
});
/* harmony default export */ const queries_getCurrencyBalance = (getCurrencyBalance);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getInfo/index.js

/**
 * @name getInfo
 * @category Ultra Queries
 * @param {tGetInfo} params  - bp api endpoint
 * @returns {Promise<tGetInfoOutput>} - some chain information
 * @description
 * A good way to get information about the chain including a unique identifier for the chain, current head block number, etc.
 * @example
 * ```typescript
 * import { getInfo } from '@ultra-alliance/ultra-sdk';
 *
 * const result = await getInfo({
 *      bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *
 * console.log('result', result);
 * ```
 */
const getInfo = async ({ bpApiEndpoint }) => fetch_get({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_info`,
    config: {},
});
/* harmony default export */ const queries_getInfo = (getInfo);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getTableByScope/index.js

/**
 * @name getTableByScope
 * @category Ultra Queries
 * @param {tGetTableByScope} params  - code, limit, lowerBound, upperBound and bp api endpoint
 * @returns {Promise<tGetInfoOutput>} - Tables available and their scopes.
 * @description
 * Returns tables available and their given scopes for a specific contract account name. Useful for seeing what entries made it into a table and the amount of rows in that table.
 * A good way to get information about the chain including a unique identifier for the chain, current head block number, etc.
 * @example
 * ```typescript
 * import { getTableByScope } from '@ultra-alliance/ultra-sdk';
 *
 * const code = 'ultra.nft.ft';
 * const limit = 10;
 *
 * const result = await getTableByScope({
 *    code,
 *    limit,
 *    bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *
 * console.log('result', result);
 * ```
 */
const getTableByScope = async ({ code, limit, lowerBound, upperBound, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_table_by_scope`,
    config: {},
    body: {
        code,
        limit,
        lower_bound: lowerBound,
        upper_bound: upperBound,
    },
});
/* harmony default export */ const queries_getTableByScope = (getTableByScope);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getTableRows/index.js

/**
 * @name getTableRows
 * @category Ultra Queries
 * @param {tGetTableRows} params  - code, table, scope, json, limit, lowerBound, upperBound and bp api endpoint
 * @returns {Promise<tGetTableRowsOutput>} - Rows in a table.
 * @description
 * Returns rows in a table given a code, table, and a scope. Rows will return empty if there is no table available under that table, or scope.
 * @example
 * ```typescript
 * import { getTableRows } from '@ultra-alliance/ultra-sdk';
 *
 * const code = 'eosio.nft.ft';
 * const table = 'factory.a';
 * const scope = 'eosio.nft.ft';
 * const limit = 10;
 * const json = true;
 *
 * const result = await getTableByScope({
 *    code,
 *    limit,
 *    bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *
 * console.log('result', result);
 * ```
 */
const getTableRows = async ({ code, table, scope, json, limit, lowerBound, upperBound, bpApiEndpoint, }) => fetch_post({
    path: `${bpApiEndpoint !== null && bpApiEndpoint !== void 0 ? bpApiEndpoint : DEFAULT_BP_API_ENDPOINT}/v1/chain/get_table_rows`,
    config: {},
    body: {
        code,
        limit,
        table,
        scope,
        json: json !== null && json !== void 0 ? json : true,
        lower_bound: lowerBound,
        upper_bound: upperBound,
    },
});
/* harmony default export */ const queries_getTableRows = (getTableRows);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getUniqsOwned/index.js

/**
 * @function getUniqsOwned - Get all uniqs owned by an account
 * @category Ultra Queries
 * @param {tGetUniqOwned} params - account name and bp api endpoint
 * @returns {Promise<tGetUniqOwnedOutput>} - uniqs owned by an account
 * @description Returns all uniqs owned by an account
 * @example
 * ```typescript
 * import { getUniqsOwned } from '@ultra-alliance/ultra-sdk';
 *
 * const account = 'ultra';
 *
 * (async () => {
 * const result = await getUniqsOwned({
 *  account,
 * bpApiEndpoint: 'https://api.ultrain.io',
 * });
 * console.log('result', result);
 * })();
 * ```
 */
async function getUniqsOwned({ account, bpApiEndpoint, }) {
    return queries_getTableRows({
        bpApiEndpoint,
        code: 'eosio.nft.ft',
        scope: account,
        table: 'token.a',
        limit: 1000,
    });
}
/* harmony default export */ const queries_getUniqsOwned = (getUniqsOwned);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getUosBalance/index.js

/**
 * @name getUosBalance (query) - Get the balance of UOS for a given account
 * @category Ultra Queries
 * @param {string} account - The account to get the balance for
 * @param {string} bpApiEndpoint - The API endpoint of the blockchain provider
 * @returns {Promise<tGetCurrencyBalanceOutput>} - The balance of UOS for the given account
 * @description
 * Returns the balance of UOS for a given account
 * @example
 * ```typescript
 * import { getUosBalance } from '@ultra-alliance/ultra-sdk';
 *
 * const account = 'ultra';
 *
 * (async () => {
 * const result = await getUosBalance({
 *  account,
 * bpApiEndpoint: 'https://api.ultrain.io',
 * });
 * console.log('result', result);
 * })();
 * ```
 */
async function getUosBalance({ account, bpApiEndpoint, }) {
    return queries_getCurrencyBalance({
        code: 'eosio.token',
        account,
        symbol: 'UOS',
        bpApiEndpoint,
    });
}
/* harmony default export */ const queries_getUosBalance = (getUosBalance);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getUniqDetail/index.js

/**
 * @name getUniqDetail - Get uniq detail
 * @category Ultra Queries
 * @param {tGetUniqDetail} params - uniqId and bp api endpoint
 * @returns {Promise<tUniq>} - Uniq detail
 * @example
 * ```typescript
 * import { getUniqDetail } from '@ultra-alliance/ultra-sdk';
 *
 * const uniqId = '1';
 *
 * const result = await getUniqDetail({
 *  uniqId,
 * bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *
 * console.log('result', result);
 * ```
 */
async function getUniqDetail({ uniqId, bpApiEndpoint, }) {
    const result = await queries_getTableRows({
        bpApiEndpoint,
        code: 'eosio.nft.ft',
        scope: 'eosio.nft.ft',
        table: 'factory.a',
        lowerBound: uniqId,
        upperBound: uniqId,
        limit: 1000,
    });
    if (!result || result.rows.length === 0) {
        throw new Error('Uniq not found');
    }
    return result.rows[0];
}
/* harmony default export */ const queries_getUniqDetail = (getUniqDetail);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getListedUniqs/index.js

/**
 * @name getListedUniqs - Get all listed uniqs
 * @category Ultra Queries
 * @param {string} bpApiEndpoint - BP API endpoint
 * @returns {Promise<tGetListedUniqsOutput>} - Listed uniqs
 * @description
 * Returns all listed uniqs
 * @example
 * ```typescript
 * import { getListedUniqs } from '@ultra-alliance/ultra-sdk';
 *
 * const result = await getListedUniqs({})
 * console.log('result', result);
 * ```
 **/
async function getListedUniqs(bpApiEndpoint) {
    return queries_getTableRows({
        bpApiEndpoint,
        code: 'eosio.nft.ft',
        scope: 'eosio.nft.ft',
        table: 'resale.a',
        json: true,
        limit: 1000,
    });
}
/* harmony default export */ const queries_getListedUniqs = (getListedUniqs);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/getUniqManifested/index.js


/**
 * @name getUniqManifested - Get uniq detail and read the manifest file generating a tUniqManifested object
 * @category Ultra Queries
 * @param {tGetUniqManifested} params - uniqId and bp api endpoint
 * @returns {Promise<tUniqManifested>} - Uniq detail with manifest file
 * @example
 * ```typescript
 * import { getUniqManifested } from '@ultra-alliance/ultra-sdk';
 *
 * const uniqId = '1';
 *
 * const result = await getUniqManifested({
 *  uniqId,
 * bpApiEndpoint: 'https://api.ultrain.io',
 * });
 *
 * console.log('result', result);
 * ```
 */
async function getUniqManifested({ uniqId, bpApiEndpoint, }) {
    return queries_getUniqDetail({
        uniqId,
        bpApiEndpoint,
    })
        .then(async (uniq) => {
        if (!uniq) {
            throw new Error('Uniq not found');
        }
        const { manifest } = await meta_data_getZipContent(uniq.meta_uris[0]);
        return {
            uniq,
            manifest,
        };
    })
        .catch(() => {
        throw new Error('Uniq not found');
    });
}
/* harmony default export */ const queries_getUniqManifested = (getUniqManifested);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/queries/index.js
/* istanbul ignore file */













//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/apis/index.js
/* istanbul ignore file */


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/ultra/class/index.js
// istanbul ignore file

/**
 * @category Ultra
 * @name Ultra
 * @param {tUltraOptions} options - bp api endpoint
 * @returns {tUltra} - Ultra class
 * @description  Ultra class providing methods to interact with the Ultra blockchain.
 * @example
 * ```typescript
 * import { Ultra, getUniqsOwned, getListedUniqs } from '@ultra-alliance/ultra-sdk';
 *
 * const ultra = new Ultra({
 *     bpApiEndpoint: 'https://api.com',
 * });
 * ```
 **/
class Ultra {
    constructor(options) {
        var _a;
        this._bpApiEndpoint = (_a = options.bpApiEndpoint) !== null && _a !== void 0 ? _a : DEFAULT_BP_API_ENDPOINT;
    }
    /**
     * @type {string}
     * @description The URL for the BP API endpoint.
     * */
    get bpApiEndpoint() {
        return this._bpApiEndpoint;
    }
    /**
     * @type {function}
     * @param {tGetAbi} params - account name
     * @returns {Promise<tGetAbiOutput>} - abi
     * @description Retrieve the ABI for an account.
     * @group Commons
     **/
    async getAbi(params) {
        const data = await queries_getAbi(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
        if (!data) {
            throw new Error(`Account ${params.accountName} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tGetAccount} params - account name
     * @returns {Promise<tGetAccountOutput>} - account
     * @description Retrieve an account.
     * @group Commons
     * */
    async getAccount(params) {
        try {
            const data = await queries_getAccount(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
            if (!data) {
                throw new Error(`Account ${params.accountName} not found`);
            }
            return data;
        }
        catch (error) {
            return undefined;
        }
    }
    /**
     * @type {function}
     * @param {tGetBlock} params - block number or id
     * @returns {Promise<tGetBlockOutput>} - block
     * @description Retrieve a block.
     * @group Commons
     * */
    async getBlock(params) {
        const data = await queries_getBlock(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
        if (!data) {
            throw new Error(`Block ${params.blockNumOrId} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tGetTableRows} params - table name, scope, code, limit, lower bound, upper bound
     * @returns {Promise<tGetTableRowsOutput>} - table rows
     * @description Retrieve rows from a table.
     * @group Commons
     * */
    async getCurrencyBalance(params) {
        const data = await queries_getCurrencyBalance(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
        if (!data) {
            throw new Error(`Account ${params.account} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @returns {Promise<tGetInfoOutput>} - info
     * @description Retrieve info.
     * @group Commons
  
     * */
    async getInfo() {
        const data = await queries_getInfo({
            bpApiEndpoint: this.bpApiEndpoint,
        });
        if (!data) {
            throw new Error(`Info not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tGetTableByScope} params - code, table, scope, limit, lower bound, upper bound
     * @returns {Promise<tGetTableByScopeOutput>} - table by scope
     * @description Retrieve a table by scope.
     *    @group Commons
     * */
    async getTableByScope(params) {
        const data = await queries_getTableByScope(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
        if (!data) {
            throw new Error(`Scope ${params.code} not found`);
        }
        return data;
    }
    /**
     *  @type {function}
     *  @param {tGetTableRows} params - table name, scope, code, limit, lower bound, upper bound
     * @returns {Promise<tGetTableRowsOutput>} - table rows
     * @description Retrieve rows from a table.
     *    @group Commons
     * */
    async getTableRows(params) {
        const data = await queries_getTableRows(Object.assign(Object.assign({}, params), { bpApiEndpoint: this.bpApiEndpoint }));
        if (!data) {
            throw new Error(`Table ${params.table} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tGetTransaction} params - transaction id
     * @returns {Promise<tGetCurrencyBalanceOutput>} - transaction
     * @description Retrieve a transaction.
     * */
    async getUosBalance(account) {
        const data = await queries_getUosBalance({
            account,
            bpApiEndpoint: this.bpApiEndpoint,
        });
        if (!data) {
            throw new Error(`Account ${account} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @returns {Promise<tGetUniqsOutput>} - uniqs
     * @group Uniqs
     * @description Retrieve uniqs.
     * */
    async getUniqsOwned(account) {
        const data = await queries_getUniqsOwned({
            account,
            bpApiEndpoint: this.bpApiEndpoint,
        });
        if (!data) {
            throw new Error(`Account ${account} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tValidInput} uniqId - uniq id
     * @returns {Promise<tUniq>} - uniq
     *   * @group Uniqs
     * @description
     * Retrieve uniq.
     * */
    async getUniqDetail(uniqId) {
        const data = await queries_getUniqDetail({ uniqId: Number(uniqId) });
        if (!data) {
            throw new Error(`Uniq ${uniqId} not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @returns {Promise<tGetListedUniqsOutput>} - uniqs
     * @description Retrieve uniqs listed as ready to sell.
     * @group Uniqs
     **/
    async getListedUniqs() {
        const data = await queries_getListedUniqs();
        if (!data) {
            throw new Error(`Listed uniqs not found`);
        }
        return data;
    }
    /**
     * @type {function}
     * @param {tValidInput} uniqId - uniq id
     * @returns {Promise<tUniqManifested>} - uniq
     * @description Retrieve uniq manifested.
     * @group Uniqs
     * */
    async getUniqManifested(uniqId) {
        const data = await queries_getUniqManifested({ uniqId: Number(uniqId) });
        if (!data) {
            throw new Error(`Uniq not found`);
        }
        return data;
    }
}
/* harmony default export */ const ultra_class = (Ultra);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/ultra/index.js
/* istanbul ignore file */


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/auth/constants/index.js
/**
 * Defines the different authentication states and initial authentication object.
 */
/**
 * @category Auth
 */
var eAuthState;
(function (eAuthState) {
    eAuthState["UNDEFINED"] = "undefined";
    eAuthState["UNAUTHENTICATED"] = "unauthenticated";
    eAuthState["AUTHENTICATED"] = "authenticated";
    eAuthState["AUTHENTICATING"] = "authenticating";
    eAuthState["LOGGING_OUT"] = "logging_out";
    eAuthState["ERROR"] = "error";
})(eAuthState || (eAuthState = {}));
/**
 * The initial authentication object.
 *
 * @category Auth
 */
const INITIAL_AUTH = {
    /**
     * The authentication state.
     */
    state: eAuthState.UNDEFINED,
    /**
     * The authentication error.
     */
    error: null,
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/auth/index.js
// istanbul ignore file


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/constants/index.js
/**
 * @category Utils
 * @description
 * Constants related to links.
 * @remarks
 * These links are used throughout the package to provide easy access to important
 * resources and documentation related to the Ultra platform.
 */
const LINKS = {
    /**
     * Link to download the Ultra wallet extension.
     */
    DOWNLOAD_WALLET: 'https://docs.ultra.io/blockchain/#/docs/ultra-wallet-extension/000_installing-extension',
    /**
     * Link to Ultra Download page.
     */
    DOWNLOAD_ULTRA: 'https://ultra.io/download',
    /**
     * Link to Ultra Is Life website.
     */
    ULTRA_IS_LIFE: 'https://ultraislife.com',
    /**
     * Link to Ultra times
     */
    ULTRA_TIMES: 'https://ultratimes.io',
    /**
     * Link to Ultra website.
     */
    ULTRA: 'https://ultra.io',
    /**
     * Link to Ultra documentation.
     */
    ULTRA_DOCS: 'https://docs.ultra.io/blockchain',
    /**
     * Link to Ultra Block Explorer
     */
    ULTRA_EXPLORER: 'https://explorer.mainnet.ultra.io',
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../ultra-utilities/packages/ultra-sdk/dist/esm/index.js
/* istanbul ignore file */
/**
 * <img alt='' src='https://img.shields.io/badge/NOT PUBLISHED-100000?style=for-the-badge&logo=&logoColor=e57373&labelColor=FFFFFF&color=e57373'/>
 * @license MIT
 * @module ultra-sdk
 * @description
 * This module includes various enumerations, classes, and type aliases that facilitate the communication with the blockchain, such as authentication, tokenization, and smart contract interaction. It also provides a set of HTTP functions, formatters, and other utilities that streamline the development of UOS-connected applications.
 *
 * ## ⚙️ Quick Start
 *
 * You can install the package by running the following command:
 * ```bash
 * npm install @ultra-alliance/ultra-sdk
 * ```
 *
 * Then you can import functions, and classes from the SDK in your project:
 * ```typescript
 * import { getBlock, Ultra } from '@ultra-alliance/ultra-sdk';
 * ```
 *
 * ## 🚀 Usage
 *
 * If all methods are exported by the package, we also provide a {@link Ultra} class that allows you to instantiate a new Ultra instance with a given `bpApiEndpoint` (default will be {@link DEFAULT_BP_API_ENDPOINT}). This class is a wrapper of the SDK functions.
 *
 * ```typescript
 * import { Ultra } from '@ultra-alliance/ultra-sdk';
 *
 * const ultra = new Ultra({
 *  bpApiEndpoint: 'https://api.ultra.eossweden.org',
 * });
 *
 * ultra.getAccount("aaa1bbb2ccc3").then((account) => {
 *   console.log(account);
 * });
 * ```
 *
 * This SDK provides a set of functions, formatters and utils that allow you to interact with the blockchain, among others:
 *
 * ### APIs
 * - {@link getUosBalance} to get the UOS balance of an account
 * - {@link getBlock} to get a block by its number
 * - {@link getAccount} to get an account-detail by its name
 * - {@link getAbi} to get the ABI of a smart contract
 * - {@link getTableRows} to get the rows of a table
 * - {@link getUniqDetail} to get the details of a uniq
 * - {@link getUniqsOwned} to get the uniqs owned by an account
 * - {@link getInfo} to get the blockchain info
 * - {@link getListedUniqs} to get the uniqs listed on the marketplace
 *
 * ### Utilities
 * - {@link getZipContent} to get the content of a zip file and read the Uniq manifest
 *
 * ### Calculations
 * - {@link calcTotalPrice} to calculate the price value of a currency for a given amount in a given base price.
 *
 * ### Formatters
 * - {@link formatUosBalance} to format a UOS balance
 * - {@link formatName} to format a name (eg: aa1...cc3)
 * - {@link formatCurrencyValue} to format a currency value
 */





//# sourceMappingURL=index.js.map

/***/ })

};
;