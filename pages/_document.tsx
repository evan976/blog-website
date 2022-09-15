import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'utils/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname,});`,
                }}
              />
            </>
          )}
          <script async src="//at.alicdn.com/t/c/font_3611336_mqgj4wsvpfe.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
