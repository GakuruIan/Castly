import { useState } from "react";

import { Mail, Lock, Eye, EyeClosed, User } from "lucide-react";
// form
import { useFormik } from "formik";
import { RegisterSchema } from "../Utils/yup.ts";

import Button from "../components/Button/Button";
import { Link, replace } from "react-router-dom";

// logo
import logo from "../assets/logo.png";

// components
import Wrapper from "../components/Wrapper/Wrapper";

// axios
import { axiosInstance } from "../Axios/axios.ts";

// toast
import { toast } from "react-toastify";

// router
import { useNavigate } from "react-router-dom";

interface Formvalues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const initialValues: Formvalues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  // submit function
  const onSubmit = async (values: Formvalues) => {
    const { confirm_password, ...data } = values;

    await axiosInstance
      .post("/register", data)
      .then((response) => {
        if (response.status === 201) {
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
    validationSchema: RegisterSchema,
  });

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

        <form action="" className="" onSubmit={handleSubmit}>
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
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="John Doe"
              />
            </div>
            {errors.name && touched.name && (
              <span className="text-xs font-poppins text-red-500">
                {errors.name}
              </span>
            )}
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
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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

          {/* password */}
          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="email-address-icon"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-sm rounded-sm block border-0 w-full ps-10 p-3 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="password"
              />
              <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 ">
                <button onClick={() => setShowPassword(!showPassword)}>
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
          {/* password */}

          {/*confirm password */}
          <div className="mb-6">
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
                placeholder="confirm password"
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
            text="Register"
            type="submit"
            variant="primary"
            style="w-full"
            isLoading={isSubmitting}
            loadingMsg="Creating Account"
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
