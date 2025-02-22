import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuList } from '../components/ControlList/ControlLit';
//import '../index.css';
import '../pages/HomePage.css';
const HomePage = () => {
  return (
    <section className="page">
      <div className="page-container">
        <h2> Hello</h2>
        <MenuList />
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default HomePage;
