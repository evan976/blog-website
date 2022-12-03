import { META } from 'config/app.config'
import * as React from 'react'

const Seo: React.FC = () => {
  return (
    <>
      <title>{`${META.title} - ${META.sub_title}`}</title>
      <meta name="description" content={META.description} />
      <meta name="keywords" content={META.keywords} />
      <meta name="author" content={META.author} />
      <meta name="copyright" content={META.author} />
      <meta name="theme-color" content={META.primary} />
      <meta name="application-name" content={META.app_name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={META.app_name} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content={META.primary} />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="twitter:card" content={META.description} />
      <meta name="twitter:url" content={META.url} />
      <meta name="twitter:title" content={META.app_name} />
      <meta name="twitter:description" content={META.description} />
      <meta name="twitter:image" content={`${META.url}/icons/icon-192x192.png`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={META.app_name} />
      <meta property="og:description" content={META.description} />
      <meta property="og:site_name" content={META.app_name} />
      <meta property="og:url" content={META.url} />
      <meta property="og:image" content={`${META.url}/icons/icon-192x192.png`} />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
      <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </>
  )
}

export default Seo
