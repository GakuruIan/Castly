import React from "react";
import Button from "../Button/Button";

// router
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="h-[calc(100vh-100px)] px-2 flex items-center justify-center flex-col gap-y-4">
        <h1 className="text-5xl md:text-8xl text-center font-neue max-w-2xl">
          Manage your polls with Castly
        </h1>
        <p className="md:text-xl text-gray-400">
          Have Your Say,Make Your Voice Count in Real-Time Polls!
        </p>

        <div className="flex items-center mt-4">
          <Button
            text="Create Poll"
            variant="primary"
            type="button"
            style="w-48"
            handleClick={() => navigate("/create-poll", { replace: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
