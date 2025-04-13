import { AppProps } from 'next/app';
import Head from 'next/head';
import { Bebas_Neue } from 'next/font/google';
import './styles.css';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Micro Frontend with Module Federation</title>
      </Head>
      <main className={`${bebas.variable} app`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
