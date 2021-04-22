import React, { useRef, useContext, useEffect, useState } from 'react';
import Home from 'src/components/Home';
import { AppContext } from 'src/components/AppContext';
import InitialNotes from 'src/Data';

export async function getServerSideProps() {
    return {
        props: { InitialNotes },
    };
}

function App({ InitialNotes }) {
    const [notes, setNotes] = useContext(AppContext);
    useEffect(() => {
        setNotes(() => InitialNotes.splice(0, 5));
    }, []);
    // setNotes(() => {
    //     return InitialNotes;
    // });

    return <Home notes={notes} setNotes={setNotes} />;
}

export default App;
