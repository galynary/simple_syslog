import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
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
