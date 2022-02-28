import GlobalStyles from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import "../services/firebase"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
