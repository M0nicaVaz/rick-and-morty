import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GithubLogo } from 'phosphor-react';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen max-w-[1440px] mx-auto w-full">
      <a
        title="Dev"
        href="https://github.com/m0nicavaz"
        target="_blank"
        rel="noreferrer"
        className="text-green-200 py-2 px-4 lg:px-2 fixed top-0 right-0 bg-gray-900 rounded"
      >
        <GithubLogo size={20} />
      </a>

      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
