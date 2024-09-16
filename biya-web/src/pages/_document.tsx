import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
