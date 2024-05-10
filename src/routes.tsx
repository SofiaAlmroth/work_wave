import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/users", element: <UsersPage /> }],
  },
]);

export default router;
