
import Script from 'next/script'




import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>

<Script async src="https://www.googletagmanager.com/gtag/js?id=UA-144162982-1"></Script>
<script>
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-144162982-1')`}
</script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
