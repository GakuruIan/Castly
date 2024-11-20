import { Mail } from "lucide-react";

import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Forgot = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full md:w-96 lg:w-2/4 max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit">
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <img src={logo} className="h-10 w-10 object-fit" />
          <h3 className="text-3xl font-semibold text-center ">Castly</h3>
          <p className="text-sm text-center text-gray-400">
            Modern take on casting votes
          </p>
        </header>

        <form action="" className="">
          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Mail size={20} />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="john@gmail.com"
              />
            </div>
            <p className="block text-xs tracking-wide mt-2 text-gray-400">
              We’ll send a reset link to the email entered above.
            </p>
          </div>

          <Button
            text="Get reset link"
            type="submit"
            variant="primary"
            style="w-full"
          />
        </form>

        <div className="mt-6">
          <p className="text-base text-center">
            Remember password?{" "}
            <Link to="/login" className="text-blue-600 ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
