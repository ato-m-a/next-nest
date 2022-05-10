import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { QueryClientProvider, QueryClient, QueryFunctionContext } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { Page } from '../types/page';

/* global style */
import '../styles/global.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 3000,
      refetchInterval: 3000,
      queryFn: ({ queryKey }: QueryFunctionContext) => fetch(queryKey.join("")).then(res => res.json()),
    },
  },
});

type Props = AppProps & {
  Component: Page;
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? (page => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Layout>
        { getLayout(<Component {...pageProps} />) }
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
