import React from 'react';
import Sidebar from './Sidebar';
import '../css/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
