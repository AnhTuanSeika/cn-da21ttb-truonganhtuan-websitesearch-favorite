// import Header from "./components/Header.jsx";
// import Footer from "./components/footer.jsx";
// import ContactUsPage from "./pages/contact-us.jsx";
// import Homepage from "./pages/homepage.jsx";
// import { Search } from 'lucide-react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutPage from "./components/layout";
import Homepage from "./pages/homepage";
import ContactUsPage from "./pages/contact-us";
import CategoryPage from "./pages/category-page";
import SearchPage from "./pages/search-page";
import { homepageLoader, politicLoader, entertainmentLoader,businessLoader, technologyLoader,healthLoader,searchLoader, sportLoader } from "./actions/loaders";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import FavoritePage from "./pages/favorite-page";

//  

// import { search } from "lucide-react"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
          loader: homepageLoader,
        },
        {
          path: "/lien-he",
          element: <ContactUsPage />
        },
        {
          path: "/chinh-tri",
          element: <CategoryPage />,
          loader: politicLoader,
        },
        {
          path: "/kinh-doanh",
          element: <CategoryPage />,
          loader: businessLoader,
        },
        {
          path: "/giai-tri",
          element: <CategoryPage />,
          loader: entertainmentLoader,
        },
        {
          path: "/cong-nghe",
          element: <CategoryPage />,
          loader: technologyLoader,
        },
        {
          path: "/the-thao",
          element: <CategoryPage />,
          loader: sportLoader,
        },
        {
          path: "/suc-khoe",
          element: <CategoryPage />,
          loader: healthLoader,
        },
        {
          path: "/tim-kiem",
          element: <SearchPage />,
          loader: searchLoader,
        },
        {
          path: "/yeu-thich",
          element: <FavoritePage />,
          // loader: searchLoader,
        },
        {
          path: "/dang-ky",
          element: <Register />
        },
        {
          path: "/dang-nhap",
          element: <Login />
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />
}









// function App() {
//   return (
//     <>
//       <Header />
//       <Homepage />
//       {/* <ContactUsPage /> */}
//       <Footer />
//     </>
//   );
// }
// const App = () => {
//   return (
//     <Search />
//   );
// };

export default App;
