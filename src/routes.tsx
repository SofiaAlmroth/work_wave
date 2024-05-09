import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/users", element: <UsersPage /> },
      { path: "/user/:email", element: <UserPage /> },
    ],
  },
]);

export default router;
