import { Home } from '@nx-react/home/feature';
import { Profile } from '@nx-react/profile/feature';
import { Layout, Navbar } from '@nx-react/shell/ui';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout
        navbarSlot={
          <Navbar
            navItems={[
              {
                name: 'Home',
                path: '/',
              },
              {
                name: 'Profile',
                path: '/profile',
              },
            ]}
          />
        }
      />
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export function Shell() {
  return <RouterProvider router={router} />;
}

export default Shell;
