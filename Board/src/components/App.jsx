import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Header from './Header';
import Footer from './Footer';


function App() {
    
    const [notes, setNotes] = useState([]); //게시글 정보를 담을 state

  return (
    <div>
      <Header/>
      <Route path="/" exact={true}>
        <Home notes={notes} setNotes={setNotes} />
      </Route>
      <Route path="/detail" component={Detail}/>
      <Footer/>
    </div>
  );

}

export default App;
