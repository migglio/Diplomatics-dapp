import './App.css';
import React from 'react';
import { Header } from '../Header';
import { Intro } from  '../Intro';
import { Paragraph } from '../Paragraph';
import { Land } from '../Land';
import { LandsContainer } from '../LandContainer';
import { Community } from '../Community';
import { Footer } from '../Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Paragraph />
      {/* <Land imgsrc={"land-arabe.jpeg"}/> */}
      <LandsContainer />
      <Community />
      {/* <Footer /> */}
    </div>
  );
}

export default App ;
