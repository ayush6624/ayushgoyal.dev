import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@geist-ui/react';

let GA_TRACKING_ID = 'UA-134274140-1';
if (process.env.NODE_ENV !== 'production') GA_TRACKING_ID = '';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "551f00d3bd54409e898731559ae1bf70"}'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
              `,
            }}
          />
        </>
        <body>
          <Main />
          <NextScript />
          <img src="https://a.ayushgoyal.dev/website/hello.png"></img>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
