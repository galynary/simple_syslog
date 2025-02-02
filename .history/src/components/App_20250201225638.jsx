import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './Header/Header';
export const App = () => {
  return (
    <div>
      <p>Hello</p>
      <Header />
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes></Routes>
      </Suspense>
    </div>
  );
};
