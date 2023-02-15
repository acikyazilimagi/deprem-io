import '@/styles/globals.css';
import { NextComponentType } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';

import ErrorBoundary from '@/components/error-boundary';
import LayoutInner from '@/components/layouts/layout-inner';
import LayoutMain from '@/components/layouts/layout-main';

const Meta = {
  name: 'deprem.io',
  title: 'Deprem İmece Platformu - deprem.io',
  image: 'https://deprem-io.vercel.app/meta.jpg',
  description:
    'Depremzedelerin yardım alabileceği ve depremzedelere yardım etmek isteyenlerin kullanabileceği ortak platform.',
};

const CustomApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }: AppLayoutProps) => {
  const PageLayout = Component.layout ?? LayoutInner;
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{Meta.title}</title>
          <meta name="description" content={Meta.description} />
          <link rel="icon" type="image/svg+xml" href="/icon.svg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site_name" content={Meta.name} />
          <meta name="twitter:title" content={Meta.title} />
          <meta name="twitter:description" content={Meta.description} />
          <meta name="twitter:image:src" content={Meta.image} />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={Meta.name} />
          <meta property="og:title" content={Meta.title} />
          <meta property="og:description" content={Meta.description} />
          <meta property="og:image" content={Meta.image} />
        </Head>

        <LayoutMain {...pageProps}>
          <PageLayout {...pageProps}>
            {getLayout(<Component {...pageProps} />)}
          </PageLayout>
        </LayoutMain>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default CustomApp;
