import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
