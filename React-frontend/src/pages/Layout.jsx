// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
