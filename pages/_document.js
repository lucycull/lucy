import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={config.lang}>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Roboto+Slab&display=swap" rel="stylesheet"/> 
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
