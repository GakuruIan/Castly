import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Main from "./Pages/Main/Main";
import Forgot from "./Auth/Forgot-password";
import LandingPage from "./components/LandingPage/LandingPage";
import CreatePoll from "./Pages/CreatePoll/CreatePoll";
import Poll from "./Pages/Poll/Poll";
import Results from "./Pages/Results/Results";
import RankingPoll from "./Pages/RankingPoll/RankingPoll";
import EditPoll from "./Pages/EditPoll/EditPoll";

// auth provider
import { AuthProvider } from "./hooks/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/create-poll",
        element: <CreatePoll />,
      },
      {
        path: "/edit-poll/:id",
        element: <EditPoll />,
      },
      {
        path: "/multiple_choice/:id/vote",
        element: <Poll />,
      },
      {
        path: "/my-polls",
        element: <MyPolls />,
      },
      {
        path: "/ranking/:id/vote",
        element: <RankingPoll />,
      },
      {
        path: "/poll/:id/results",
        element: <Results />,
      },
    ],
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
    path: "/forgot-password",
    element: <Forgot />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

import { ToastContainer, Zoom } from "react-toastify";
import MyPolls from "./Pages/MyPolls/MyPolls";
import ResetPassword from "./Auth/Reset-password";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer transition={Zoom} className="font-poppins text-sm" />
      </AuthProvider>
    </>
  );
}

export default App;
