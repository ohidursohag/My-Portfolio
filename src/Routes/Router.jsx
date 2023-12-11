import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";

const myCreatedRouter = createBrowserRouter([
   {
      path: '/',
      element: <ManiLayout />,
      children: [
         
      ]
   },
])

export default myCreatedRouter;
