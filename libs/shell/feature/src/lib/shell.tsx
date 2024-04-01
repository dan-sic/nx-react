import { Home } from '@nx-react/home/feature';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export function Shell() {
  return <RouterProvider router={router} />;
}

export default Shell;
