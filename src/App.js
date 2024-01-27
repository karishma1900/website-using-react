import React from 'react';
import { Navbar, Header, Features, Download, Subscribe, Faq, Footer } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
