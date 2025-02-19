import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  variant?: "xl";
}

const Wrapper: React.FC<props> = ({ children, variant }) => {
  return (
    <div
      className={`w-full md:w-96  max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit ${
        variant ? "lg:w-9/12" : "lg:w-2/4"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
