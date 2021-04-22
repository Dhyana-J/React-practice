import { createContext, useEffect, useState } from 'react';
import 'styles/globals.css';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

export const AppContext = createContext();

function MyApp(props) {
    console.log(props);
    return (
        <>
            <Header />
            <Footer />
        </>
    );
}

// function MyApp({ Component, pageProps }) {
//     const [notes, setNotes] = useState([]);
//     useEffect(() => {
//         setNotes(() => pageProps.InitialNotes.splice(0, 5));
//     }, []);

//     return (
//         <AppContext.Provider value={[notes, setNotes]}>
//             <Header />
//             <Component {...pageProps} />
//             <Footer />
//         </AppContext.Provider>
//     );
// }

export default MyApp;
