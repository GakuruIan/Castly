import { useState, useEffect } from "react";

// interfaces
import { PollResponse, Poll, messageResponse } from "../../interfaces";

// components
import Wrapper from "../../components/Wrapper/Wrapper";

// icon
import { ChartArea, Check, ClipboardList } from "lucide-react";

// components
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

// dummy image
import astronaut from "../../assets/astronaut.jpg";

//icon
import { CircleCheckBig } from "lucide-react";

// router
import { useParams } from "react-router-dom";

// axios
import { axiosInstance } from "../../Axios/axios";

// utils
import { convertTime } from "../../Utils/utils";

// toast notification
import { toast } from "react-toastify";

// react navigation
import { useNavigate } from "react-router-dom";

const MultipleChoice = () => {
  const navigation = useNavigate();

  const [form, setForm] = useState({
    selected: "",
    participantName: "",
  });

  const [poll, setPoll] = useState<Poll>();

  const params = useParams();

  const FetchData = async () => {
    await axiosInstance
      .get<PollResponse>(`/poll/${params?.id}`)
      .then((response) => {
        if (response.status === 200) {
          setPoll(response.data.poll);
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data);
        toast.error(`${data.message}`);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);

  const handleSubmit = async () => {
    const data = {
      poll_id: params.id,
      selected_options: [form.selected],
    };

    await axiosInstance
      .post<messageResponse>("/vote", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data?.message);
          navigation(`/poll/${params.id}/results`);
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data);
        toast.error(`${data.message}`);
      });
  };

  return (
    <div>
      <div className="flex justify-center w-full mb-6">
        <Wrapper>
          <Header
            title={poll?.title ? poll.title : ""}
            creator={poll?.creator?.name ? poll?.creator?.name : "Anonymous"}
            time={
              poll?.createdAt ? convertTime(poll.createdAt) : "Invalid date"
            }
          />

          <div className="mt-4">
            <h1 className="text-sm mb-4">Make your choice</h1>

            <form action="">
              <div className="">
                {/* choices  */}
                <div className="block">
                  {poll?.options.map((option) => {
                    return (
                      <div className="mb-3.5" key={option._id}>
                        <input
                          type="radio"
                          id={option._id}
                          name="options"
                          value={option.option}
                          checked={form.selected === option._id}
                          onChange={() =>
                            setForm((form) => ({
                              ...form,
                              selected: option._id,
                            }))
                          }
                          required
                          className="hidden peer"
                        />
                        <label
                          htmlFor={option._id}
                          className="inline-flex items-center justify-between py-2 px-2 w-full peer-checked:border-green-400 rounded-md border border-dark-20 hover:border-dark-5 transition-all duration-75   group"
                        >
                          <div className="flex items-center gap-x-1">
                            {option.image_url && (
                              <img
                                src={astronaut}
                                className="size-12 rounded-md object-cover"
                              />
                            )}
                            <p className="text-base font-medium">
                              {option.option}
                            </p>
                          </div>
                          {form.selected === "option one" && (
                            <div className="text-green-400">
                              <CircleCheckBig size={18} />
                            </div>
                          )}
                        </label>
                      </div>
                    );
                  })}
                </div>
                {/* choices  */}

                {/* if name is required */}
                <div>
                  {poll?.requirePartcipantName && (
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
                          name="participateName"
                          value={form.participantName}
                          onChange={(e) =>
                            setForm((form) => ({
                              ...form,
                              participantName: e.target.value,
                            }))
                          }
                          className=" block w-full  p-2.5 rounded-sm placeholder:text-sm placeholder-gray-400  outline-0 bg-dark-20 border-0"
                          placeholder="John Doe"
                          required={poll?.requirePartcipantName}
                        />
                      </div>
                      <p className="block text-xs tracking-wide mt-2 text-gray-400">
                        Your name is required in this poll
                      </p>
                    </div>
                  )}
                </div>
                {/* if name is required */}

                <div className="flex items-center justify-between">
                  {/* buttons */}
                  <div className="flex  w-full items-center gap-x-2">
                    <Button
                      text="Vote"
                      variant="primary"
                      type="button"
                      style="w-full md:flex-1 py-1.5"
                      icon={<Check size={18} />}
                      handleClick={handleSubmit}
                    />
                    <Button
                      text="Show result"
                      variant="secondary"
                      type="button"
                      style="w-full md:flex-1 py-1.5"
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

export default MultipleChoice;
