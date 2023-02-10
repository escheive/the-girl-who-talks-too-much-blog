import Navbar from '@/components/Navbar'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {

  return (

    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}
