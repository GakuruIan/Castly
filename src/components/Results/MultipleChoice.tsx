import React, { useEffect, useState } from "react";

// interface
import { ResultsProps } from "../../interfaces";

// utils function to calculate percentage
import { CalculatePercentage } from "../../Utils/utils";

// motion
import { motion } from "motion/react";

import ConfettiExplosion from "react-confetti-explosion";

// components
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

// utils
import { convertTime } from "../../Utils/utils";

const MultipleChoice: React.FC<ResultsProps> = ({ results }) => {
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    if (results.isClosed) {
      setExplode(true);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center w-full">
        <Wrapper>
          <Header
            title={results?.title}
            creator={results?.creator?.name || "Anonymous"}
            time={
              results?.createdAt
                ? convertTime(results.createdAt)
                : "Invalid date"
            }
          />

          <div className="mt-6">
            <div className="grid md:grid-cols-1 w-full gap-y-4">
              {/* candidate score */}

              {explode && (
                <div className="flex items-center justify-center">
                  <ConfettiExplosion duration={2800} />
                </div>
              )}

              <div className="">
                {results?.results?.map((result) => {
                  return (
                    <div key={result.option_id} className="mb-4">
                      <div className="relative px-2 border border-dark-20 rounded-md flex justify-between mb-1 py-4">
                        <span className="text-base font-medium text-white z-10">
                          {result.option_name}
                        </span>
                        <span className="text-sm font-medium text-white z-10">
                          {CalculatePercentage(
                            result?.votes,
                            results.total_votes
                          )}{" "}
                          %
                        </span>
                        <motion.div
                          className="absolute bg-[#FF4069]  top-0 left-0 right-0 bottom-0 rounded-sm"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${CalculatePercentage(
                              result.votes,
                              results.total_votes
                            )}%`,
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* candidate score */}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default MultipleChoice;
