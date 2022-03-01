import GlobalStyles from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import "../services/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyles />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
