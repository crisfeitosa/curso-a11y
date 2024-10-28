import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return <Component {...pageProps} />;
}
