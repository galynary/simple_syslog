import { Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <>
      <header>
        <span>symbol</span>
        <nav></nav>
      </header>
      <Outlet />
    </>
  );
};
