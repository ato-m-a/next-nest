import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType } from 'next';
import { Fragment, useRef } from 'react';
import { QueryClientProvider, QueryClient, QueryFunctionContext } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { Page } from '../types/page';

/* global style */
import '../styles/global.scss';

type Props = AppProps & {
  Component: Page;
}

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? (page => page);
  const Layout = Component.layout ?? Fragment;

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 3000,
          refetchInterval: 3000,
          queryFn: ({ queryKey }: QueryFunctionContext) => fetch(queryKey.join("")).then(res => res.json()),
        },
      }
    })
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools />
      <Layout>
        <Hydrate state={pageProps.dehydrateState}>
          { getLayout(<Component {...pageProps} />) }
        </Hydrate>
      </Layout>
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
  return { pageProps };
}

export default MyApp;
