import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-200 font-sans leading-normal tracking-normal'>
        <Main />
        <NextScript />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
