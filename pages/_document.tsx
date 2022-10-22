import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://digitalax.xyz/" />
          <meta property="og:title" content="DIGITALAX" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="summary" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
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
