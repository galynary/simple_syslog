import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
