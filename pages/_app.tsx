import "@/styles/globals.css";
//
import type { AppProps } from "next/app";
//
import { api } from "@/lib/api";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
//
import { NextPageWithLayout } from "@/types";
//
import ThemeContextProvider from "@/context/theme";
import DisplayContextProvider from "@/context/display";
import AudioContextProvider from "@/context/audio";
//
import PublicLayout from "@/components/layout-public";
//
import { Lato } from "@next/font/google";

/*
 *
 * INITIALIZERS
 *
 */
export const font = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

/*
 *
 * APP TYPES (EXTENDED WITH LAYOUT)
 *
 */
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/*
 *
 * APP (MAIN)
 *
 */
const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <DisplayContextProvider>
            <AudioContextProvider>
              <PublicLayout>
                <Component {...pageProps} />
              </PublicLayout>
            </AudioContextProvider>
          </DisplayContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

/*
 *
 * tRPC WRAPPER
 *
 */
export default api.withTRPC(App);
