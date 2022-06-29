import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const ReactGA = import('react-ga4');
    

    // @ts-ignore
    //import("bootstrap/dist/js/bootstrap.min.js");
  });

  return <Component {...pageProps} />
}

export default MyApp
