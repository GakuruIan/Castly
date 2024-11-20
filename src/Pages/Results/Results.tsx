// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = () => {
  const data = {
    labels: ["candidate 1", "candidate 2", "candidate 3"],
    datasets: [
      {
        label: "Votes",
        data: [65, 10, 25],
        backgroundColor: ["#FF4069", "#059BFF", "#FFC234"],
        borderColor: "#14182A",
      },
    ],
  };

  const config = {
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Votes",
        },
      },
    },
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <Wrapper>
          <Header title="poll title" creator="username" time="30" />

          <div className="mt-6">
            <div className="grid md:grid-cols-1 w-full gap-y-4">
              {/* candidate score */}

              <div className="">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-white">
                      Candidate name
                    </span>
                    <span className="text-sm font-medium text-white">45%</span>
                  </div>
                  <div className="w-full rounded-full h-2.5 bg-dark-20">
                    <div
                      className="bg-blue-600  h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-white">
                      Candidate name
                    </span>
                    <span className="text-sm font-medium text-white">
                      65% (winner)
                    </span>
                  </div>
                  <div className="w-full rounded-full h-2.5 bg-dark-20">
                    <div
                      className="bg-green-400  h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* candidate score */}

              {/* chart */}
              <div className="h-80 flex items-center justify-center w-full">
                <Doughnut options={config} data={data} />
              </div>
              {/* chart */}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Results;
