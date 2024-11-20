import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Main from "./Pages/Main/Main";
import Forgot from "./Auth/Forgot-password";
import LandingPage from "./components/LandingPage/LandingPage";
import CreatePoll from "./Pages/CreatePoll/CreatePoll";
import Poll from "./Pages/Poll/Poll";
import Results from "./Pages/Results/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/create-poll',
        element:<CreatePoll/>
      },
      {
        path:'/poll/:id',
        element:<Poll/>
      },
      {
        path:'/poll/:id/results',
        element:<Results/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:'/forgot-password',
    element:<Forgot/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
