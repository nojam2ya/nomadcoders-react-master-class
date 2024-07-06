import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@src/style/theme.ts';
import GlobalStyle from '@src/style/GlobalStyle.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from '@src/router.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
