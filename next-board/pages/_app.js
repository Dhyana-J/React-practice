import '../styles/globals.css'
import {useState} from 'react';
import {AppWrapper} from '../src/components/AppContext';

function MyApp({ Component, pageProps }) {
  return <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>
}

export default MyApp
