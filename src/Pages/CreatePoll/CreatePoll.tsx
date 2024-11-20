import React from "react";

// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button/Button";

// icons
import { ChartArea, X, Plus } from "lucide-react";

const CreatePoll = () => {
  return (
    <div className="flex justify-center">
      <Wrapper>
        <header className="text-center">
          <h1 className="text-xl ">Create poll</h1>
          <p className="text-sm text-gray-400 mt-2">
            Fill in the form below to create your poll.
          </p>
        </header>

        <form action="" className="">
          <div className="mb-6">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="Question for the poll"
              />
            </div>
            <div className="flex items-center justify-between mt-0.5">
              <p className="block text-xs tracking-wide mt-2 text-gray-400">
                Enter title/ question for your poll
              </p>
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
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
              >
                <option value="US" selected>
                  Multiple choice
                </option>
                <option value="CA">Ranking</option>
                <option value="FR">Image Poll</option>
              </select>
            </div>
          </div>

          {/* dynamic inputs */}
          <div className="mb-4">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Answer Options
            </label>

            <div className="relative mb-2">
              <input
                type="text"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="Option 1"
              />
              <button
                type="button"
                className="absolute inset-y-0 end-3 flex items-center ps-3.5 "
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative mb-2">
              <input
                type="text"
                id="email-address-icon"
                className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                placeholder="Option 2"
              />
              <button
                type="button"
                className="absolute inset-y-0 end-3 flex items-center ps-3.5"
              >
                <X size={16} />
              </button>
            </div>

            <button
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
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                    >
                      <option value="US" selected>
                        One vote per IP address
                      </option>
                      <option value="CA">One vote per Castly account</option>
                      <option value="FR">Allow multiple votes per user</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
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
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
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
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                      placeholder="Date when the poll starts"
                    />
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
                      className=" text-sm rounded-sm block border-0 w-full p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                      placeholder="Date when the poll ends"
                    />
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
            text="Create Poll"
            type="submit"
            variant="primary"
            style="w-full"
            icon={<ChartArea size={18} />}
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default CreatePoll;
