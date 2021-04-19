import React, { useContext, useState } from 'react';
import Home from '../src/components/Home';
import Detail from './detail/[id]';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { AppContext } from '../src/components/AppContext';

function App() {
    const [notes, setNotes] = useContext(AppContext);

    return <Home notes={notes} setNotes={setNotes} />;
}

export default App;
