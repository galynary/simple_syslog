import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './Header/Header';

const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
