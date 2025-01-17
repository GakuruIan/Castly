import React from "react";

// yup validation schema
import { PollSchema } from "../../Utils/yup";

// uuid
import { v4 as uuid } from "uuid";

// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button/Button";

import { useFormik } from "formik";
import { AnimatePresence, motion } from "motion/react";

// options
type Option = {
  id: string;
  value: string;
};

// interface
interface Formvalues {
  pollTitle: string;
  pollType: string;
  pollSettings: string;
  options: Option[];
  openDate: string | number;
  closeDate: string | number;
  requireUsername?: boolean;
  useCAPTCHA?: boolean;
}

// icons
import { ChartArea, X, Plus } from "lucide-react";

const EditPoll = () => {
  const initialValues: Formvalues = {
    pollTitle: "",
    pollType: "",
    pollSettings: "",
    options: [{ id: uuid().replace(/-/g, "").substring(0, 7), value: "" }],
    openDate: "",
    closeDate: "",
    requireUsername: false,
    useCAPTCHA: false,
  };

  const onSubmit = async (values: Formvalues) => {
    console.log(values);
  };

  const {
    values,
    handleChange,
    errors,
    isSubmitting,
    touched,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema: PollSchema,
  });

  const handleAddOption = () => {
    setFieldValue("options", [
      ...values.options,
      { id: uuid().replace(/-/g, "").substring(0, 7), name: "", value: "" },
    ]);
  };

  const handleRemoveOption = (optionId: string) => {
    const updatedOptions = values.options.filter(
      (option) => option.id !== optionId
    );

    setFieldValue("options", updatedOptions);
  };

  return (
    <div className="flex justify-center">
      <Wrapper>
        <header className="text-center">
          <h1 className="text-xl ">Edit poll</h1>
          <p className="text-sm text-gray-400 mt-2">
            Fill in the form below to update your poll.
          </p>
        </header>

        <form action="" className="" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                name="pollTitle"
                value={values.pollTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400 mb-1.5"
                placeholder="Question for the poll"
              />
            </div>
            <div className="flex items-center justify-between mt-0.5">
              {errors.pollTitle && touched.pollTitle ? (
                <span className="text-xs font-poppins text-red-500">
                  {errors.pollTitle}
                </span>
              ) : (
                <p className="block text-xs tracking-wide mt-2 text-gray-400">
                  Enter title/ question for your poll
                </p>
              )}

              {/* <button className="bg-inherit text-gray-400 hover:text-gray-300 text-sm">Add description</button> */}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Poll type
            </label>
            <div className="relative">
              <select
                id="default"
                name="pollType"
                value={values.pollType}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
              >
                <option value="multiple" selected>
                  Multiple choice
                </option>
                <option value="ranking">Ranking</option>
                <option value="poll">Image Poll</option>
              </select>

              {errors.pollType && touched.pollType && (
                <span className="text-xs font-poppins text-red-500">
                  {errors.pollType}
                </span>
              )}
            </div>
          </div>

          {/* dynamic inputs */}
          <div className="mb-4 relative h-full">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Answer Options
            </label>

            <AnimatePresence>
              {values.options.map((option, index) => {
                return (
                  <motion.div
                    layout
                    layoutId={option.id.toString()}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative mb-2"
                    key={option.id.toString()}
                  >
                    <input
                      type="text"
                      id="email-address-icon"
                      name={`options[${index}].value`}
                      value={option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                      placeholder="Option"
                    />
                    <button
                      onClick={() => handleRemoveOption(option.id)}
                      type="button"
                      className="absolute inset-y-0 end-3 flex items-center ps-3.5 "
                    >
                      <X size={16} />
                    </button>
                    {errors.options?.[index] && touched?.options?.[index] && (
                      <span
                        className="text-xs font-poppins text-red-500"
                        onClick={() => console.log(errors?.options?.[index])}
                      >
                        {errors?.options?.[index]?.value}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <button
              onClick={handleAddOption}
              type="button"
              className="my-4 text-sm bg-indigo-600 hover:bg-indigo-700 transition-colors duration-75 px-4 py-2 rounded-sm flex items-center gap-x-1"
            >
              <Plus size={16} />
              Add Option
            </button>
          </div>
          {/* dynamic inputs */}

          <div className="w-full border-t border-t-gray-500  mb-4">
            <h6 className="text-base font-poppins my-2 text-gray-300">
              Poll Settings
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="">
                <div className="mb-4">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm"
                  >
                    Voting security
                  </label>
                  <div className="relative">
                    <select
                      id="default"
                      name="pollSettings"
                      value={values.pollSettings}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                    >
                      <option value="one_vote_per_ip" selected>
                        One vote per IP address
                      </option>
                      <option value="require_account">
                        One vote per Castly account
                      </option>
                      <option value="allow_ananymous">
                        Allow ananymous Voting
                      </option>
                      <option value="multiple_voting">
                        Allow multiple votes per user
                      </option>
                    </select>

                    {errors.pollSettings && touched.pollSettings && (
                      <span className="text-xs font-poppins text-red-500">
                        {errors.pollSettings}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    name="requireUsername"
                    checked={values.requireUsername}
                    onChange={handleChange}
                    className="w-4 h-4  rounded focus:ring-blue-600 ring-offset-gray-800  bg-gray-700 border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Require Participant name
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    name="useCAPTCHA"
                    checked={values.useCAPTCHA}
                    onChange={handleChange}
                    className="w-4 h-4  rounded focus:ring-blue-600 ring-offset-gray-800  bg-gray-700 border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Use CAPTCHA
                  </label>
                </div>
              </div>

              <div className="">
                <div className="mb-4">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm"
                  >
                    Open Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="email-address-icon"
                      name="openDate"
                      value={values.openDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                      placeholder="Date when the poll starts"
                    />
                    {errors.openDate && touched.openDate && (
                      <span className="text-xs font-poppins text-red-500">
                        {errors.openDate}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="block text-xs tracking-wide mt-2 text-gray-400">
                      Date when the poll starts
                    </p>
                    {/* <button className="bg-inherit text-gray-400 hover:text-gray-300 text-sm">Add description</button> */}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm"
                  >
                    Close Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="email-address-icon"
                      name="closeDate"
                      value={values.closeDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                      placeholder="Date when the poll ends"
                    />

                    {/* error display */}
                    {errors.closeDate && touched.closeDate && (
                      <span className="text-xs font-poppins text-red-500">
                        {errors.closeDate}
                      </span>
                    )}
                    {/* error display */}

                    <div className="flex items-center justify-between mt-0.5">
                      <p className="block text-xs tracking-wide mt-2 text-gray-400">
                        Date when the poll ends
                      </p>
                      {/* <button className="bg-inherit text-gray-400 hover:text-gray-300 text-sm">Add description</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            text="Update Poll"
            type="submit"
            variant="primary"
            style="w-full"
            isLoading={isSubmitting}
            loadingMsg="Updating"
            icon={<ChartArea size={18} />}
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default EditPoll;
