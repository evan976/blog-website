import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo: React.FC<{ setting: ISetting }> = ({ setting }) => {

  return (
    <Helmet>
      <title>{`${setting.title} - ${setting.subTitle}`}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,viewport-fit=cover,maximum-scale=1"
      />
      <meta name="description" content={setting.summary} />
      <meta name="keywords" content={setting?.keywords?.join(',')} />
      <meta name="author" content="Evan" />
      <meta name="copyright" content="Evan" />
      <link rel="icon" type='image/x-icon' href={setting.favicon}  />
    </Helmet>
  )
}

export default Seo