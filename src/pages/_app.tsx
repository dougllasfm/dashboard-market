import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import GlobalStyles from "../styles/GlobalStyles";
import { defineInterceptor } from "../services/api"

function MyApp({ Component, pageProps }: AppProps) {
  defineInterceptor()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default MyApp;
