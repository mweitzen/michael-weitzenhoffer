import { Html, Head, Main, NextScript } from "next/document";
import { font } from "./_app";

export default function Document() {
  return (
    <Html lang="en" className={`${font.variable} bg-black`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
