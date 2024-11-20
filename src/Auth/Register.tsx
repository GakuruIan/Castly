import { Mail, Lock, Eye, EyeClosed, User } from "lucide-react";

import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

// components
import Wrapper from "../components/Wrapper/Wrapper";

const Register = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <Wrapper>
        <header className="px-2 mb-6 flex items-center justify-center flex-col gap-y-3">
          <img src={logo} className="h-10 w-10 object-fit" />
          <h3 className="text-3xl font-semibold text-center ">Castly</h3>
          <p className="text-sm text-center text-gray-400">
            Modern take on casting votes
          </p>
        </header>

        <form action="" className="">
          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <User size={20} />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="John Doe"
              />
            </div>
          </div>

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
              We’ll never share your details.
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type="password"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="password"
              />
              <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                <Eye size={20} />
              </div>
            </div>
          </div>

          <Button
            text="Register"
            type="submit"
            variant="primary"
            style="w-full"
          />
        </form>

        <p className="text-gray-500 text-center my-6">OR</p>

        <Button
          text="Sign up with Google"
          type="button"
          variant="secondary"
          style="w-full"
        />

        <div className="mt-6">
          <p className="text-base text-center">
            Have an account?{" "}
            <Link to="/login" className="text-blue-600 ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
