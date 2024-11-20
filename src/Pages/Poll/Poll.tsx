// components
import Wrapper from "../../components/Wrapper/Wrapper";

// icon
import { ChartArea, Check,ClipboardList} from "lucide-react";

// components
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const Poll = () => {
  return (
    <div>
      <div className="flex justify-center w-full mb-6">
        <Wrapper>
          <Header title="poll title" creator="username" time="30"/>

          <div className="mt-4">
            <h1 className="text-sm mb-2">Make your choice</h1>

            <form action="">
              <div className="">
                {/* choices  */}
                <div className="block">
                  <div className="flex items-center mb-2 me-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4 text-red-600 focus:ring-red-600 ring-offset-dark-20 focus:ring-2 bg-dark-20 "
                    />
                    <label
                      htmlFor="red-radio"
                      className="ms-2 text-base font-medium text-gray-300"
                    >
                      Option 1
                    </label>
                  </div>
                  <div className="flex items-center mb-2 me-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4 text-red-600 focus:ring-red-600 ring-offset-dark-20 focus:ring-2 bg-dark-20 "
                    />
                    <label
                      htmlFor="red-radio"
                      className="ms-2 text-base font-medium text-gray-300"
                    >
                      Option 1
                    </label>
                  </div>
                  <div className="flex items-center mb-2 me-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4 text-red-600 focus:ring-red-600 ring-offset-dark-20 focus:ring-2 bg-dark-20 "
                    />
                    <label
                      htmlFor="red-radio"
                      className="ms-2 text-base font-medium text-gray-300"
                    >
                      Option 1
                    </label>
                  </div>
                </div>
                {/* choices  */}

                {/* if name is required */}
                <div className="mb-6">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email-address-icon"
                      className=" block w-full  p-2.5 rounded-sm placeholder:text-sm placeholder-gray-400  outline-0 bg-dark-20 border-0"
                      placeholder="John Doe"
                    />
                  </div>
                  <p className="block text-xs tracking-wide mt-2 text-gray-400">
                    Your name is required in this poll
                  </p>
                </div>
                {/* if name is required */}

                <div className="flex items-center justify-between">
                  {/* buttons */}
                  <div className="flex items-center gap-x-2">
                    <Button
                      text="Vote"
                      variant="primary"
                      type="submit"
                      style="w-32 py-1.5"
                      icon={<Check size={18} />}
                    />
                    <Button
                      text="Show result"
                      variant="secondary"
                      type="button"
                      style="w-32 py-1.5"
                      icon={<ChartArea size={18} />}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Wrapper>
      </div>

      <div className="flex justify-center w-full mb-6">
        <Wrapper>
          <header className="flex items-center justify-between border-b pb-2 border-b-dark-20">
            <div className="block">
              <h2 className="text-xl mb-1">Share</h2>
              <p className="text-xs tracking-wide text-gray-400">
                Share the poll with others
              </p>
            </div>
          </header>

          <div className="">
            <div className="h-28 flex items-center flex-col gap-y-2 justify-center w-full">
              <div className="relative">
                <label htmlFor="npm-install-copy-button" className="sr-only">
                  Label
                </label>
                <input
                  id="npm-install-copy-button"
                  type="text"
                  className=" text-sm rounded-md block border-0 w-44 p-2.5 dark:bg-dark-20  placeholder-gray-400 text-gray-400"
                  value="npm install flowbite"
                  disabled
                />
                <button
                  data-copy-to-clipboard-target="npm-install-copy-button"
                  data-tooltip-target="tooltip-copy-npm-install-copy-button"
                  className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                >
                  <span id="default-icon">
                    <ClipboardList size={16} />
                  </span>
                  <span
                    id="success-icon"
                    className="hidden inline-flex items-center"
                  >
                    <Check size={16} />
                  </span>
                </button>
              </div>
              
              <div className="flex items-center gap-x-2">
                {/* icons will come here */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Poll;
