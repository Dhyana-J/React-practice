import Layout from '../comps/Layout';
import '../styles/globals.css';

//This is root component
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
