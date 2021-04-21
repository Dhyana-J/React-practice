import '../styles/globals.css';
import { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { AppWrapper } from '../src/components/AppContext';

function MyApp({ Component, pageProps }) {
    return (
        // <AppWrapper>
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
        // {/* </AppWrapper> */}
    );
}

export default MyApp;
