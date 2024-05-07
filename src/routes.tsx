import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import UserPage from "./components/UserPage";

const router = createBrowserRouter([
  { path: "/", element: <UsersPage /> },
  { path: "/user/:email", element: <UserPage /> },
]);

export default router;
