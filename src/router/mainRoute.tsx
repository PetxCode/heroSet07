import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import HomeScreen from "../pages/HomeScreen";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
