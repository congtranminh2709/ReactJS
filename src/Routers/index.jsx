import App from "@/App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/index.jsx";
import Login from "@/pages/Login.jsx";
import Auth from "@/components/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <App />
      </Auth>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
export default router;
