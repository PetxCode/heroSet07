import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import HomeScreen from "../pages/HomeScreen";
import Text from "../pages/Text";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "test",
        element: <Text />,
      },
    ],
  },
]);
