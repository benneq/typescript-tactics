import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { updateAssetsPrefix } from 'utils/path';

export default class Document extends NextDocument {
  override render() {
    return (
      <Html>
        <Head>
          <meta name="version" content={process.env['VERSION']} />
          <link rel="shortcut icon" href={updateAssetsPrefix('favicon.ico')} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
