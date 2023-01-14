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
// import ThemeProvider from "@/context/theme";
// import DisplayProvider from "@/context/display";
//
import PublicLayout from "@/layouts/public";

/*
 *
 * INITIALIZERS
 *
 */
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
        {/* <ThemeProvider> */}
        {/* <DisplayProvider> */}
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
        {/* </DisplayProvider> */}
        {/* </ThemeProvider> */}
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
