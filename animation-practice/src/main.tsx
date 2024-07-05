import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@src/style/theme.ts';
import GlobalStyle from '@src/style/GlobalStyle.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.tsx';
import Boxes from '@components/Boxes';
import PopContainer from '@src/components/PopContainer/index.tsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      { path: 'boxes', element: <Boxes /> },
      { path: 'pop', element: <PopContainer /> },
    ],
  },
]);

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
            {/* <App /> */}
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
