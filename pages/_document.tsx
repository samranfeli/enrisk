import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Enrisk</title>
        <meta name="description" content="Risk Based Decision Analysis" />
        <meta name="keywords" content="Enrisk,Risk Based Decision Analysis,risk analysis" />
        <meta name="author" content="Samran feli moghadam" />
      </Head>
      <body className='md:base-font'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
