import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import SharpAfterDarkPage from '@/components/pages/SharpAfterDarkPage';
import CustomerInfoPage from '@/components/pages/CustomerInfoPage';
import MiamiKnifeClubPage from '@/components/pages/MiamiKnifeClubPage';
import BeforeAfterPage from '@/components/pages/BeforeAfterPage';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sharp-after-dark',
        element: <SharpAfterDarkPage />,
      },
      {
        path: 'customer-info',
        element: <CustomerInfoPage />,
      },
      {
        path: 'miami-knife-club',
        element: <MiamiKnifeClubPage />,
      },
      {
        path: 'before-after',
        element: <BeforeAfterPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
