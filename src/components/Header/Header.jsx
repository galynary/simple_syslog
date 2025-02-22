import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <p className="header-text">Syslog server</p>
        </div>
      </header>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
