import { AuthProvider } from "@/contexts/auth-context";
import RootLayout from "@/layouts/root-layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { useEffect, type ReactElement, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => <RootLayout>{page}</RootLayout>);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {getLayout(
          <>
            <Toaster position="top-center" />
            <Component className={openSans.className} {...pageProps} />
          </>
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
}
