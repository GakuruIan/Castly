import { useState, useEffect } from "react";

import Wrapper from "../../components/Wrapper/Wrapper";

// icons
import { FilePenLine, Trash, Eye } from "lucide-react";

// react router
import { Link } from "react-router-dom";

// components
import Modal from "../../components/Modal/Modal";

//axios
import { axiosInstance } from "../../Axios/axios";

// toast notification
import { toast } from "react-toastify";

interface pollsResponse {
  _id: string;
  title: string;
  poll_type: string;
  voteCount: number;
  isClosed: boolean;
}
interface deleteResponse {
  message: string;
}
const MyPolls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<string>("");
  const [polls, setPolls] = useState<pollsResponse[]>([]);

  const handleClick = (id: string) => {
    if (!isOpen && id) {
      setIsOpen(!isOpen);
      setId(id);
    }
  };

  const handleSubmit = async () => {
    await axiosInstance
      .delete<deleteResponse>(`/delete-poll/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setIsOpen(false);
          toast.success(`${response.data.message}`);
        }
      })
      .catch((err) => {
        setIsOpen(false);
        const { data } = err.response;
        console.log(data);
        toast.error(`${data.message}`);
      });
  };

  const FetchData = async () => {
    await axiosInstance
      .get<pollsResponse>("/my-polls")
      .then((response) => {
        if (response.status === 200) {
          setPolls(response.data);
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

  return (
    <div className="flex justify-center">
      <Wrapper variant="xl">
        <Modal
          message="Are you sure you want to delete this Poll"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSubmit={handleSubmit}
        />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="py-5 px-1 text-lg font-semibold text-left rtl:text-right text-gray-300">
              My Polls
            </caption>
            <thead className="text-xs bg-dark-20 uppercase border-b border-dark-20 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Poll title
                </th>
                <th scope="col" className="px-6 py-3">
                  Poll type
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {polls?.map((poll) => {
                return (
                  <tr
                    key={poll._id}
                    className="group border-b hover:cursor-pointer bg-inherit border-dark-5"
                  >
                    <th
                      scope="row"
                      className="px-6 py-3.5 font-medium text-gray-300 whitespace-nowrap "
                    >
                      <Link to="/" className="group-hover:underline">
                        {poll.title}
                      </Link>
                    </th>
                    <td className="px-6 py-3.5 text-gray-300">
                      {poll.poll_type}
                    </td>
                    <td className="px-6 py-3.5 text-gray-300 text-sm">
                      <span
                        className={`size-3 px-2 rounded-lg text-sm ${
                          poll.isClosed
                            ? "bg-rose-500/20 text-rose-500"
                            : "bg-green-500/20 text-green-600"
                        }`}
                      >
                        {poll.isClosed ? "closed" : "open"}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-gray-300">
                      {poll.voteCount}
                    </td>
                    <td className="flex items-center gap-x-3 px-6 py-2.5 text-gray-300 text-left">
                      <Link
                        to={`/poll/${poll._id}/results`}
                        className="font-medium text-gray-300 hover:text-gray-400"
                      >
                        <Eye size={18} />
                      </Link>
                      <Link
                        to={`/edit-poll/${poll._id}`}
                        className="font-medium text-blue-500 hover:text-blue-400"
                      >
                        <FilePenLine size={18} />
                      </Link>
                      <button
                        onClick={() => handleClick(`${poll._id}`)}
                        className="font-medium text-rose-500 hover:text-rose-400"
                      >
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </div>
  );
};

export default MyPolls;
