import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  variant?: "sm" | "md" | "lg";
}

const Wrapper: React.FC<props> = ({ children }) => {
  return (
    <div className="w-full md:w-96 lg:w-2/4 max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit">
      {children}
    </div>
  );
};

export default Wrapper;
