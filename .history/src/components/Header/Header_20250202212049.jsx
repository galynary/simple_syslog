import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <span>symbol</span>
        <nav>
          <Link to="/" end>
            Home
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
