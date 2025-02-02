import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
const HomePage = lazy(() => import('../page/HomePage'));

import { Header } from './Header/Header';
export const App = () => {
  return (
    <div>
      <p>Hello</p>
      <Header />
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
