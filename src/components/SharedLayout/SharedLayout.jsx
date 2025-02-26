import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div className="page">{children}</div>
      </main>
    </>
  );
};

export default SharedLayout;
