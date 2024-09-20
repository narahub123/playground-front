import { createBrowserRouter } from "react-router-dom";
import PlayGround from "../widgets/PlayGround";
import { NotFound } from "@/pages/Error/NotFound";
import { Auth } from "@/pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);
