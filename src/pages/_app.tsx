import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen max-w-[1440px] mx-auto w-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
