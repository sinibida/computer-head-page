import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/common/Home";
import About from "./screens/common/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />, // TODO: PLaceholder
      },
    ],
  },
]);

function Root() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Root;
