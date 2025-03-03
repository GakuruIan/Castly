import React, { useEffect, useState } from "react";

// interface
import { ResultsProps } from "../../interfaces";

//icon
import { CircleCheckBig } from "lucide-react";

import ConfettiExplosion from "react-confetti-explosion";

// components
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

// utils
import { convertTime } from "../../Utils/utils";

const RankingResults: React.FC<ResultsProps> = ({ results }) => {
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
                {results?.ranking_results?.map((result) => {
                  return (
                    <div key={result.option_id} className="mb-4">
                      <div
                        className={`border  px-2 py-2 rounded-md ${
                          results?.winner?.option_id == result.option_id
                            ? "border-green-400"
                            : "border-dark-20"
                        }`}
                      >
                        <div className="relative flex items-center justify-between mb-1 ">
                          <span className="text-base font-medium text-white z-10">
                            {result.option_name}
                          </span>

                          {/* winner gets a check box */}
                          {results?.winner?.option_id === result.option_id && (
                            <div className="text-green-400">
                              <span className="text-sm flex items-center gap-x-1">
                                winner <CircleCheckBig size={14} />
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm tracking-wide text-zinc-400 font-saira  font-normal">
                            Position {result.ranking_position}
                          </span>
                          <p className="text-sm tracking-wide text-zinc-400 font-saira font-normal">
                            Score {result.rank_score}
                          </p>
                        </div>
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

export default RankingResults;
