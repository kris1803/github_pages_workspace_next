import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    (async () => {
    const ReactGA = (await import('react-ga4')).default;
    const TRACKING_ID = "G-HE237YC5RK"; // YOUR_OWN_TRACKING_ID
    ReactGA.initialize(TRACKING_ID, {});
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    reportWebVitals(({ id, name, value }: { id:any, name:any, value: any }) =>
      ReactGA.event({
        action: name,
        category: 'Web Vitals',
        label: id,
        nonInteraction: true,
        value: typeof value === 'number'? Math.round(value) : value,
      })
    );

    })()
    // @ts-ignore
    //import("bootstrap/dist/js/bootstrap.min.js");
  });

  return <Component {...pageProps} />
}

const reportWebVitals = (onPerfEntry: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default MyApp;
