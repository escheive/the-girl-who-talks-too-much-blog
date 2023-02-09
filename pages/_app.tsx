import Navbar from '../components/navbar'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (

    <>
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}
