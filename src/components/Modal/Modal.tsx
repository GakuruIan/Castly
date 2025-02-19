import React from "react";

import { motion, AnimatePresence } from "motion/react";

// icons

import { CircleAlert, X } from "lucide-react";

interface modalProps {
  message: string;
  handleSubmit?: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<modalProps> = ({
  message,

  handleSubmit,
  isOpen,
  setIsOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-dark-20/30 top-0 left-0 right-0 bottom-0 backdrop-blur-sm absolute flex items-center justify-center z-50 "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            id="popup-modal"
            className="py-4"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-dark-20 rounded-lg shadow-sm ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-dark-10 hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <X className="size-5 md:size-5" />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <div className="flex items-center w-full justify-center mb-4">
                    <CircleAlert className="size-10 md:size-14" />
                  </div>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {message}
                  </h3>
                  <button
                    onClick={handleSubmit}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-rose-600 hover:bg-rose-500 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium  bg-transparent hover:bg-dark-5 border border-dark-5 rounded-md text-gray-400  hover:text-white"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
