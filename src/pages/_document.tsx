import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="antialiased flex flex-col bg-[url('/light.png')] dark:bg-[url('/dark.png')] bg-cover bg-no-repeat text-black dark:text-white">
        
        <Main />
        <NextScript  />
      </body>
    </Html>
  );
}
