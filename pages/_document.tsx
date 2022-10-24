import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
        <meta name="og:url" content="https://digitalax.xyz/" />
          <meta name="og:title" content="DIGITALAX" />
          <meta name="og:description" content="I Want My Web3 Fashion" />
          <meta name="og:image" content="https://digitalax.xyz/card.png/" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:url" content="https://digitalax.xyz/" />
          <meta name="og:image" content="https://digitalax.xyz/card.png/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@igitalax_" />
          <meta name="twitter:creator" content="@digitalax_" />
          <meta
            name="twitter:image"
            content="https://digitalax.xyz/card.png/"
          />
          <meta name="twitter:url" content="https://digitalax.xyz/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://digitalax.xyz/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Letter Magic";
                    font-weight: 400;
                    src: url("./fonts/Letter Magic.ttf");
                }

                @font-face {
                  font-family: "Fira Bold";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Bold.ttf");
                }

                @font-face {
                  font-family: "Fira Regular";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Regular.ttf");
                }

                @font-face {
                  font-family: "Internal Rainbows";
                  font-weight: 400;
                  src: url("./fonts/Internal Rainbows.otf");
                }

                @font-face {
                  font-family: "Fira Medium";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Medium.ttf");
                }

                @font-face {
                  font-family: "Fira Light";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Light.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Bold.ttf");
                }

                @font-face {
                  font-family: "FH Giselle Light";
                  font-weight: 400;
                  src: url("./fonts/FHGiselle-Light.ttf");
                }

                @font-face {
                  font-family: "A Love of Thunder";
                  font-weight: 400;
                  src: url("./fonts/A Love of Thunder.ttf");
                }

                @font-face {
                  font-family: "Futurist";
                  font-weight: 400;
                  src: url("./fonts/Futurist Fixed-width Regular.ttf");
                }

                @font-face {
                  font-family: "Audimat";
                  font-weight: 400;
                  src: url("./fonts/AUdimat Regular.ttf");
                }
            `,
            }}
          ></style>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
