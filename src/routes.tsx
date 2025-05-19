import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
