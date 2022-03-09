import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { AuthProvider } from "../contexts/AuthContext";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default MyApp;
