//const {  Button, Layout, Menu, theme  } = antd;
//const {  Sidebar } = Layout;

import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  FileDoneOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../Sidebar/Logo';

import '../Sidebar/Sidebar.css';

export const SidebarMenu = () => {
  return (
    <main className="main">
      <div className="sidebar">
        <Suspense fallback={<div>Loading...</div>}>
          <Logo />
        </Suspense>
        <nav className="sidebar-menu">
          <Link to="/" className="sidebar-icon">
            <HomeOutlined className="sidebar-icon" /> Home
          </Link>
          <Link to="/messages" className="sidebar-icon">
            <FileDoneOutlined className="sidebar-icon" /> Messages
          </Link>
          <Link to="/settings" className="sidebar-icon">
            <SettingOutlined className="sidebar-icon" /> Settings
          </Link>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
