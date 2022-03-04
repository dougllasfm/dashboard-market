import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { AuthProvider } from "../contexts/AuthContext";
import GlobalStyles from "../styles/GlobalStyles";
import "../services/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
