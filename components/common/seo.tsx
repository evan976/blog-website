import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { META } from 'config/app.config'

const Seo: React.FC = () => {
  return (
    <Helmet>
      <title>{`${META.title} - ${META.sub_title}`}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover,maximum-scale=1" />
      <meta name="description" content={META.description} />
      <meta name="keywords" content={META.keywords} />
      <meta name="author" content={META.author} />
      <meta name="copyright" content={META.author} />
      <meta name="theme-color" content={META.primary} />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </Helmet>
  )
}

export default Seo
