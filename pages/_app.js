import App from 'next/app';
import React from 'react';
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
