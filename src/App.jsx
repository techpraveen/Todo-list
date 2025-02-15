import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
