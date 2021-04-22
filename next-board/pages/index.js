import React, { useRef, useContext, useEffect, useState } from 'react';
import Home from 'src/components/Home';
import Notes from 'src/Data';

export async function getServerSideProps() {
    return {
        props: { InitialNotes: Notes },
    };
}

function App(props) {
    return <Home />;
}

export default App;
