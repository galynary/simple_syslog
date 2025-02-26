import { Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <>
      <header>
        <p>Symbol</p>
        <nav></nav>
      </header>
      <Outlet />
    </>
  );
};
