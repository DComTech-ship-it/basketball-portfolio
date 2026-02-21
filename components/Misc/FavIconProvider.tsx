import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const FavIconProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={
            colorMode === 'dark' ? '/Basketball_player__1_-removebg-preview.png' : '/Basketball_player__1_-removebg-preview.png'
          }
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={
            colorMode === 'dark' ? '/Basketball_player__1_-removebg-preview.png' : '/Basketball_player__1_-removebg-preview.png'
          }
        />
        <link
          rel="apple-touch-icon"
          href={
            colorMode === 'dark' ? '/Basketball_player__1_-removebg-preview.png' : '/Basketball_player__1_-removebg-preview.png'
          }
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/Basketball_player__1_-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Basketball_player__1_-removebg-preview.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Basketball_player__1_-removebg-preview.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}

export default FavIconProvider
