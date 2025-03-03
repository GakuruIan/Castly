import { CircleUser, Search, LogOut } from "lucide-react";

// router
import { Link } from "react-router-dom";

// image
import logo from "../../assets/logo.png";

// useAuth
import { useAuth } from "../../hooks/useAuth";

// axios
import { axiosInstance } from "../../Axios/axios";

// router
import { useNavigate } from "react-router-dom";

// toast
import { toast } from "react-toastify";

//response interface
import { messageResponse } from "../../interfaces";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    axiosInstance
      .post<messageResponse>("/logout")
      .then((response) => {
        if (response.status === 200) {
          toast.success(`${response.data?.message}`);
          navigate(`${response.data.redirect}`, { replace: true });
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data);
        toast.error(`${data.message}`);
      });
  };
  return (
    <div className="fixed z-40 top-0 left-0 w-full py-4 h-14 flex items-center bg-dark-200">
      <div className=" flex items-center justify-between w-full mx-auto max-w-5xl px-3">
        <div className="flex items-center gap-x-2">
          <img src={logo} className="h-8 w-8 object-fit" />
          <h4>Castly</h4>
        </div>

        <div className="">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/create-poll"
                  className="block py-2 px-3 md:p-0 text-white"
                >
                  Create Poll
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-white">
                  Polls
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="">
            {isAuthenticated ? (
              <div className="relative">
                <img
                  className="w-8 h-8 p-0.5 rounded-full ring-2 ring-gray-600"
                  src={logo}
                  alt="Bordered avatar"
                />

                {/* dropdown */}
                <div
                  id="dropdown"
                  className="z-10 absolute top-10 right-[-6px]  rounded-lg shadow w-44 bg-dark-50"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  hover:bg-dark-20 hover:text-white"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  hover:bg-dark-20 hover:text-white"
                      >
                        My Polls
                      </a>
                    </li>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-x-1 py-1 px-2 hover:bg-hover-20 hover:text-white"
                    >
                      <LogOut size={16} className="text-gray-400" />
                      Logout
                    </button>
                  </ul>
                </div>
                {/* dropdown */}
              </div>
            ) : (
              <div className="flex items-center gap-x-4">
                <Link to="/login">
                  <CircleUser size={20} />
                </Link>

                <Link to="/">
                  <Search size={20} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
