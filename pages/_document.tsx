import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"

import { GA_TRACKING_ID } from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {isProduction && (
            <>
              <script type="text/javascript"
                dangerouslySetInnerHTML={{__html:`
                	atOptions = {
		'key' : '7c99d15f4cdaee69c28449077771196d',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};`}}></script>
	    <Script
      id="adsterra-script"
      dangerouslySetInnerHTML={{__html:`
        atOptions = {
          'key' : '7c99d15f4cdaee69c2844907771196d',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };`}}
      strategy="afterInteractive"
    />
              <script type='text/javascript' async src='//pl23424574.highcpmgate.com/f1/bc/c0/f1bcc056105789d5a8d48c33abf93c75.js'></script>
	<script type='text/javascript' async src='//dearesthydrogen.com/cd/28/aa/cd28aa19ab530882bd5405b27115636b.js'></script>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
		<script async data-cfasync="false" src="//dearesthydrogen.com/ed76727bc70e0dd9a1233b8b2a7e5823/invoke.js"></script>
<div id="container-ed76727bc70e0dd9a1233b8b2a7e5823"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
