import React from 'react';
import Document, {
  Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <style>
            {`
            body {
              background-color: ${process.env.NEXT_PUBLIC_THEME_BACKGROUND};
              color: ${process.env.NEXT_PUBLIC_THEME_FONT_COLOR};
            }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
