import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import SharpAfterDarkPage from '@/components/pages/SharpAfterDarkPage';
import CustomerInfoPage from '@/components/pages/CustomerInfoPage';
import MiamiKnifeClubPage from '@/components/pages/MiamiKnifeClubPage';
import BeforeAfterPage from '@/components/pages/BeforeAfterPage';
import BeforeAfterDetailPage from '@/components/pages/BeforeAfterDetailPage';
import KnivesForSalePage from '@/components/pages/KnivesForSalePage';
import KnifeDetailPage from '@/components/pages/KnifeDetailPage';
import MembershipScopeTheScenesPage from '@/components/pages/MembershipScopeTheScenesPage';
import MembershipLimitedAccessPage from '@/components/pages/MembershipLimitedAccessPage';
import MembershipClubRegularPage from '@/components/pages/MembershipClubRegularPage';
import MembershipVIPPage from '@/components/pages/MembershipVIPPage';
import MembershipAllAccessPage from '@/components/pages/MembershipAllAccessPage';
import MembershipClubBenefactorPage from '@/components/pages/MembershipClubBenefactorPage';
import ArtistProcessPage from '@/components/pages/ArtistProcessPage';
import ArtistMeditationPage from '@/components/pages/ArtistMeditationPage';
import BrandStoryPage from '@/components/pages/BrandStoryPage';
import KnifeServicePage from '@/components/pages/KnifeServicePage';

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
      {
        path: 'before-after/:id',
        element: <BeforeAfterDetailPage />,
      },
      {
        path: 'knives-for-sale',
        element: <KnivesForSalePage />,
      },
      {
        path: 'knife/:id',
        element: <KnifeDetailPage />,
      },
      {
        path: 'membership/scope-the-scene',
        element: <MembershipScopeTheScenesPage />,
      },
      {
        path: 'membership/limited-access',
        element: <MembershipLimitedAccessPage />,
      },
      {
        path: 'membership/club-regular',
        element: <MembershipClubRegularPage />,
      },
      {
        path: 'membership/vip',
        element: <MembershipVIPPage />,
      },
      {
        path: 'membership/all-access',
        element: <MembershipAllAccessPage />,
      },
      {
        path: 'membership/club-benefactor',
        element: <MembershipClubBenefactorPage />,
      },
      {
        path: 'artist-process',
        element: <ArtistProcessPage />,
      },
      {
        path: 'artist-meditation',
        element: <ArtistMeditationPage />,
      },
      {
        path: 'brand-story',
        element: <BrandStoryPage />,
      },
      {
        path: 'knife-sharpening-services',
        element: <KnifeServicePage />,
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
