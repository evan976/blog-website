import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-[#e3e3e3] dark:bg-[#232323] transition-all duration-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
