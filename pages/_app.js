import "../styles/globals.css";
import "../styles/tailwind.css";
import { ThemeProvider } from "next-theme";
import Head from "next/head";
import Router from "next/router";
import { NProgress } from "nprogress";
import ProgressBar from "react-scroll-progress-bar";
import ScrollTop from "./components/ScrollTop";
import LayoutWrapper from "./components/LayoutWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ProgressBar bgcolor="#42A5F5"></ProgressBar>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ScrollTop />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
