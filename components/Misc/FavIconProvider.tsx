import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const FavIconProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()
  const faviconPath = colorMode === 'dark' ? '/favicon.ico' : '/favicon-lightmode.ico'
  
  return (
    <>
      <Head>
        <link rel="icon" href={faviconPath} />
        <link rel="shortcut icon" href={faviconPath} />
        <link rel="apple-touch-icon" href={faviconPath} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}

export default FavIconProvider
