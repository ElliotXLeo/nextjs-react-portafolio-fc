import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Elliot Garamendi</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
          <meta name="description" content="Elliot Garamendi Portafolio con Next.js y React"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;