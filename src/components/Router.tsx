import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';
import HomePage from '@/components/pages/HomePage';
import ServicesPage from '@/components/pages/ServicesPage';
import TestimonialsPage from '@/components/pages/TestimonialsPage';
import OurStoryPage from '@/components/pages/OurStoryPage';
import ContactPage from '@/components/pages/ContactPage';
import GiveawayPage from '@/components/pages/GiveawayPage';
import BlogPage from '@/components/pages/BlogPage';
import BlogPostPage from '@/components/pages/BlogPostPage';
import PrivacyPage from '@/components/pages/PrivacyPage';
import TermsPage from '@/components/pages/TermsPage';
import ProductsPage from '@/components/pages/ProductsPage';

// Import Wix Stores routes and providers
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Main Layout component with Header and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <LeadMagnetPopup />
    </div>
  );
}

// Layout with WixServicesProvider and ScrollToTop
function RootLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <MainLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "our-story",
        element: <OurStoryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "giveaway",
        element: <GiveawayPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:slug",
        element: <BlogPostPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      // Wix Stores Routes
      {
        path: "store",
        element: (
          <div className="w-full">
            <div className="bg-background py-8">
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                <h1 className="font-heading text-5xl text-foreground mb-2">Premium Knives & Packages</h1>
                <p className="font-paragraph text-lg text-dark-gray">Curated selection of artisan-approved knives and sharpening packages</p>
              </div>
            </div>
            <div className="w-full" />
          </div>
        ),
        loader: defaultStoreCollectionRouteRedirectLoader,
      },
      {
        path: "store/:categorySlug",
        element: (
          <div className="w-full">
            <div className="bg-background py-8">
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                <h1 className="font-heading text-5xl text-foreground mb-2">Shop by Category</h1>
                <p className="font-paragraph text-lg text-dark-gray">Browse our premium knife collection</p>
              </div>
            </div>
            <StoreCollectionRoute productPageRoute="/products" />
          </div>
        ),
        loader: storeCollectionRouteLoader,
      },
      {
        path: "products/:slug",
        element: (
          <div className="w-full">
            <div className="bg-background py-8">
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                <h1 className="font-heading text-5xl text-foreground mb-2">Product Details</h1>
              </div>
            </div>
            <ProductDetailsRoute />
          </div>
        ),
        loader: productRouteLoader,
      },
      {
        path: "cart",
        element: (
          <div className="w-full">
            <div className="bg-background py-8">
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                <h1 className="font-heading text-5xl text-foreground mb-2">Shopping Cart</h1>
                <p className="font-paragraph text-lg text-dark-gray">Review your items and proceed to checkout</p>
              </div>
            </div>
            <Cart />
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
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
