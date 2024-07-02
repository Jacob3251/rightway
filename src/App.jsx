import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import University from "./pages/University/University";
import Resources from "./pages/Resources/Resources";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/About",
      element: <About></About>,
    },
    {
      path: "/University",
      element: <University></University>,
    },
    {
      path: "/Resources",
      element: <Resources></Resources>,
    },
    {
      path: "/Contact",
      element: <Contact></Contact>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
