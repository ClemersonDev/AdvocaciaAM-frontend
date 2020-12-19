import React from 'react';
import Sidebar from './components/Menu/sidebar';
import './components/Menu/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WpButton from './components/WpButton/WpButton';
import TopoButton from './components/TopoButton/TopoButton';

import Routes from './routes';

export default function App() {
  return (
    <div>
      
      <div id="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">
          <Header />
          <Routes />
          <WpButton />
          <TopoButton />
          <Footer />
        </div>
      </div>

    </div>
    
    
    
  );
}
