import "../styles/tailwind.css";
import { ThemeProvider } from "next-theme";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import ProgressBar from "react-scroll-progress-bar";
import ScrollTop from "../components/ScrollTop";
import LayoutWrapper from "../components/LayoutWrapper";
import siteMetadata from "../data/siteMetadata";
import { Analytics } from "@vercel/analytics/react";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  console.log("onRouteChangeStart triggered");
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log("onRouteChangeComplete triggered");
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log("onRouteChangeError triggered");
  NProgress.done();
};

const defaultTheme = {
  colors: {
    primary: "#71717a",
    secondary: "#ff00c3",
    text: "#fff",
    highlight: "#ff00c3",
    icon: "#fff",
    background: "transparent",
  },
  fonts: {
    body: "inherit",
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <ProgressBar bgcolor="#42A5F5"></ProgressBar>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <ScrollTop />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
