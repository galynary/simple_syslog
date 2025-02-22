import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { Messages } from '../../pages/Messages';
export const Container = () => {
  return (
    <div className="pages">
      <HomePage />
      <Messages />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
