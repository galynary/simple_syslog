import { Link } from 'react-router-dom';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import '../Sidebar/Sidebar.css';
const Sidebar = () => {
  return (
    <div className="w-48">
      <div className="sidebar  flex-column fixed z-10 h-[100vh] shadow-md">
        <div className="sidebar-container">
          <div className="logo">
            <div className="logo-text">
              <p>imple</p>
              <p>yslog</p>
              <p>erver</p>
            </div>
          </div>
          <nav className="nav-sidebar flex-column">
            <Link to="/dashboard" className="sidebar-link">
              <IoMdHome aria-label="Dashboard Icon" /> Dashboard
            </Link>
            <Link to="/message" className="sidebar-link">
              <BsChatSquareTextFill aria-label="Message Icon" /> Message
            </Link>
            <Link to="/settings" className="sidebar-link">
              <IoMdSettings aria-label="Settings Icon" /> Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
