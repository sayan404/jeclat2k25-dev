import { AppProps } from "next/app";
import { AppProvider } from "../context/AppContext";
import { ErrorBoundary } from "../components/ErrorBoundary";
import PerformanceWrapper from "../components/PerformanceWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <AppProvider>
        <PerformanceWrapper>
          <Component {...pageProps} />
        </PerformanceWrapper>
      </AppProvider>
    </ErrorBoundary>
  );
}
