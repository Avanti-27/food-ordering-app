import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import App from "./App";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

// const Grocery = lazy(() => {
//   import("./components/Grocery");
// });

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      /* {
        path: "/grocery",
        element: (
        <Suspense fallback={<h1>Loading..</h1>}> 
        <Grocery /> 
        </Suspense>
        ),
      },*/
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
