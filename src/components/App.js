import React from 'react';
import logo from './logo.svg';
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
