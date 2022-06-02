import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo: React.FC = () => {
  return (
    <Helmet>
      <title>Next.js + TypeScript + Styled Components</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,viewport-fit=cover,maximum-scale=1"
      />
      <meta name="description" content="Next.js + TypeScript + Styled Components" />
      <meta name="keywords" content="Next.js, TypeScript, Styled Components" />
      <meta name="author" content="Kazuya Sato" />
      <meta name="copyright" content="Kazuya Sato" />
    </Helmet>
  )
}

export default Seo