import { useState, useEffect } from "react";

// icons
import { Mail, Lock, Eye, EyeClosed } from "lucide-react";

// formik
import { useFormik } from "formik";
import { LoginSchema } from "../Utils/yup.ts";

import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

// components
import Wrapper from "../components/Wrapper/Wrapper";

// axios
import { axiosInstance } from "../Axios/axios.ts";

// router
import { useNavigate } from "react-router-dom";

// toast
import { toast } from "react-toastify";

// interface
import { messageResponse } from "../interfaces.ts";

import { useAuth } from "../hooks/useAuth.ts";

interface Formvalues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const Login = () => {
  const { isAuthenticated } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  });

  const initialValues: Formvalues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  // submit function
  const onSubmit = async (values: Formvalues) => {
    const { rememberMe, ...data } = values;
    await axiosInstance
      .post<messageResponse>("/login", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success(`${response.data?.message}`);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data);
        toast.error(`${data.message}`);
      });
  };

  const {
    values,
    handleChange,
    errors,
    isSubmitting,
    touched,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema: LoginSchema,
  });

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <Wrapper>
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <img src={logo} className="h-10 w-10 object-fit" />
          <h3 className="text-3xl font-semibold text-center ">Castly</h3>
          <p className="text-sm text-center text-gray-400">
            Modern take on casting votes
          </p>
        </header>

        <form action="" className="" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="john@gmail.com"
              />
            </div>
            {errors.email && touched.email ? (
              <span className="text-xs font-poppins text-red-500">
                {errors.email}
              </span>
            ) : (
              <p className="block text-xs tracking-wide mt-2 text-gray-400">
                We’ll never share your details.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="password"
              />
              <div className="absolute inset-y-0 end-3 flex items-center ps-3.5">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                </button>
              </div>
            </div>
            {errors.password && touched.password && (
              <span className="text-xs font-poppins text-red-500">
                {errors.password}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center ">
              <input
                checked={values.rememberMe}
                onChange={handleChange}
                name="rememberMe"
                id="checkbox-1"
                type="checkbox"
                className="w-4 h-4  rounded focus:ring-blue-600 ring-offset-gray-800  bg-gray-700 border-gray-600"
              />
              <label
                htmlFor="checkbox-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div className="">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password
              </Link>
            </div>
          </div>

          <Button
            text="Login"
            type="submit"
            variant="primary"
            style="w-full"
            isLoading={isSubmitting}
            loadingMsg="Logging in"
          />
        </form>

        <p className="text-gray-500 text-center my-6">OR</p>

        <Button
          text="Sign in with Google"
          type="button"
          variant="secondary"
          style="w-full"
        />

        <div className="mt-6">
          <p className="text-base text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
