import RootLayout from '@/layouts/root-layout';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/contexts/auth-context';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RootLayout>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </RootLayout>
      </AuthProvider>
    </QueryClientProvider>
  );
}
