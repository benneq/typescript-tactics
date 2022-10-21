/*
  How to Disable Server-Side Rendering (SSR) in Next.js | DEV Community
  https://dev.to/apkoponen/how-to-disable-server-side-rendering-ssr-in-next-js-1563

  How To Disable SSR for a NextJS Page | Frontend Digest
  https://frontend-digest.com/how-to-disable-ssr-for-a-nextjs-page-d6b19aa350e3
*/

import type { FunctionComponent, ReactNode } from 'react';
import type { AppProps } from 'next/app';

import 'i18n';
import 'prismjs/themes/prism-tomorrow.css';
import 'styles/globals.scss';
import Layout from '../components/layout/Layout';
import { MDXProvider } from '@mdx-js/react';
import PreCode from 'components/PreCode';
import Heading from 'components/Heading';

const SafeHydrate: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : children}
  </div>
);

const components: import('mdx/types').MDXComponents = {
  h1: ({ children }) => (
    <Heading component="h1" className="text-5xl">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading component="h1" className="text-4xl">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading component="h1" className="mt-4 mb-2 text-3xl first:mt-0">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading component="h1" className="text-2xl">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading component="h1" className="text-xl">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading component="h1" className="text-lg">
      {children}
    </Heading>
  ),
  pre: PreCode,
  ul: ({ children }) => <ul className="ml-6 list-disc">{children}</ul>,
  ol: ({ children }) => <ul className="ml-6 list-decimal">{children}</ul>,
};

export const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  // <SafeHydrate>
  <MDXProvider components={components}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MDXProvider>
  // </SafeHydrate>
);

export default App;
