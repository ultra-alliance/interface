import type { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utilities/createEmotionCache';
import { UltraProvider } from '@ultra-alliance/react-ultra';
import { BP_API_ENDPOINTS } from '@ultra-alliance/ultra-sdk';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ultraTheme } from '@ultra-alliance/uikit';

interface UltraAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<UltraAppProps> = props => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={ultraTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { background: ultraTheme.palette.background.default },
          }}
        />
        <UltraProvider bpApiEndpoint={BP_API_ENDPOINTS.main[5]}>
          <Component {...pageProps} />
        </UltraProvider>
        <ToastContainer
          theme="dark"
          toastStyle={{
            background: ultraTheme.palette.background.default,
            color: ultraTheme.palette.text.primary,
            border: '1px solid',
            borderColor: ultraTheme.palette.divider,
            boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
          }}
          position="bottom-right"
          autoClose={5000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
