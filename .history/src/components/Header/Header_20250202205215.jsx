import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Header>
        <span>symbol</span>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
