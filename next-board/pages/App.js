import React, { useContext, useState } from "react";
import Home from '../src/components/Home';
import Detail from '../src/components/Detail';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { AppContext } from '../src/components/AppContext'


function App() {
    
    const [notes,setNotes] = useContext(AppContext);

    console.log(notes);
    console.log(setNotes);

  return (
      <>
      <Header/>
        <Home notes={notes} setNotes={setNotes} />
        {/* <Detail/> */}
      <Footer/>
      </>
  );

}

export default App;
