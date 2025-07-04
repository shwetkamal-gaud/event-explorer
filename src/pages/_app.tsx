import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main className="flex flex-col flex-grow">
        <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
