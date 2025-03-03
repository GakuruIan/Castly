import { useState } from "react";

// logo

import logo from "../assets/logo.png";

// icons
import { Lock, Eye, EyeClosed } from "lucide-react";

// components
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";

// form
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../Utils/yup";
import { Link } from "react-router-dom";

interface Formvalues {
  password: "";
  confirm_password: "";
}

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: Formvalues = {
    password: "",
    confirm_password: "",
  };

  //   TODO Add reset password function

  const onSubmit = async (values: Formvalues) => {};

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
    validationSchema: ResetPasswordSchema,
  });

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <Wrapper>
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <img src={logo} className="h-10 w-10 object-fit" />
          <h3 className="text-3xl font-semibold text-center ">
            Reset Password
          </h3>
          <p className="text-sm text-center text-gray-400">
            Let's get you back into your account
          </p>
        </header>

        <form action="" className="" onSubmit={handleSubmit}>
          <div className="mb-8">
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
                placeholder="Enter new password"
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

          {/*confirm password */}
          <div className="mb-8">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="email-address-icon"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="confirm new password"
              />
              <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 ">
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                </button>
              </div>
            </div>
            {errors.confirm_password && touched.confirm_password && (
              <span className="text-xs font-poppins text-red-500">
                {errors.confirm_password}
              </span>
            )}
          </div>
          {/* confirm password */}

          <Button
            text="Reset password"
            type="submit"
            variant="primary"
            style="w-full"
            isLoading={isSubmitting}
            loadingMsg="Logging in"
          />
        </form>

        <p className="text-gray-500 text-center my-6">OR</p>

        <div className="mt-6">
          <p className="text-base text-center">
            Remember Password ?
            <Link to="/register" className="text-blue-600 ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
