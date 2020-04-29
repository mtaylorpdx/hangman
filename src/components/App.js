import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HangmanControl from './HangmanControl';

function App() {
  return (
   <React.Fragment>
     <Header />
     <HangmanControl />
     <Footer />
   </React.Fragment>
  );
}

export default App;
