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

const SafeHydrate: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : children}
  </div>
);

const components: import('mdx/types').MDXComponents = {
  h1: ({ children }) => <h1 className="text-5xl">{children}</h1>,
  h2: ({ children }) => <h1 className="text-4xl">{children}</h1>,
  h3: ({ children }) => <h1 className="text-3xl">{children}</h1>,
  h4: ({ children }) => <h1 className="text-2xl">{children}</h1>,
  h5: ({ children }) => <h1 className="text-xl">{children}</h1>,
  h6: ({ children }) => <h1 className="text-lg">{children}</h1>,
  pre: PreCode,
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
