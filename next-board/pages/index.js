import React, { useContext, useEffect, useState } from 'react';
import Home from '../src/components/Home';
import Detail from './detail/[id]';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { AppContext } from '../src/components/AppContext';

// export const getStaticProps = async () => {
//     // runs at build time. this function never runs in the browser
//     // data fetch 할 수 있는 function

//     return {
//         props: { initialNotes: [{ id: 1, title: 1, content: 1 }] },
//     };
// };

function App() {
    const [notes, setNotes] = useState([]);

    return <Home notes={notes} setNotes={setNotes} />;
}

export default App;
