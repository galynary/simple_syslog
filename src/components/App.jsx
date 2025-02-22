import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import { SidebarMenu } from './Sidebar/Sidebar';

const HomePage = lazy(() => import('../pages/HomePage'));
const Messages = lazy(() => import('../pages/Messages/Messages'));
const Settings = lazy(() => import('../pages/Settings/Settings'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<SidebarMenu />}>
            <Route index element={<HomePage />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
