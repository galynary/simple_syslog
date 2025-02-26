import { Routes, Route } from 'react-router-dom';
import { lazy, useState, useEffect, Suspense } from 'react';
import { Header } from './Header/Header';
import FormLogin from './FormLogin/FormLogin';
import Sidebar from '../components/Sidebar/Sidebar';
//const Home = lazy(() => import('../pages/HomePage'));
const Message = lazy(() => import('../pages/Message'));
const Setting = lazy(() => import('../pages/Setting'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Перевіряємо статус автентифікації при завантаженні сторінки
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Зберігаємо статус автентифікації в localStorage
  };

  return !isAuthenticated ? (
    <FormLogin onLogin={handleLogin} />
  ) : (
    <div className="syslog flex relative w-full">
      <Sidebar />
      <div className="page ml-200px grow">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Dashboard />} />
        </Routes>
        <Suspense fallback={<div>Loading</div>}>
          <div className="main">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/message" element={<Message />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </div>
  );
};
