import { useEffect, useState } from "react";

// router
import { useParams } from "react-router-dom";

//dnd
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";

import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Button from "../../components/Button/Button";

// axios instance
import { axiosInstance } from "../../Axios/axios";

// toast
import { toast } from "react-toastify";

// util function (convert time)
import { convertTime } from "../../Utils/utils";

interface Poll {
  _id: string;
  ip: string;
  title: string;
  description: string;
  poll_type: string;
  allow_multiple_votes: boolean;
  openDate: string; // Stored as ISO Date String
  closeDate: string; // Stored as ISO Date String
  useCaptcha: boolean;
  requirePartcipantName: boolean;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  settings: {
    one_vote_per_ip: boolean;
    require_account: boolean;
  };
  options: {
    _id: string;
    option: string;
    image_url: string | null;
    position: number | null;
  }[];
}

interface OptionsResponse {
  _id: string;
  option: string;
  image_url: string | null;
  position: number | null;
}

interface PollResponse {
  poll: Poll;
}

const RankingPoll = () => {
  const params = useParams();

  const [poll, setPoll] = useState<Poll>();

  const [options, setOptions] = useState<OptionsResponse[]>([]);

  const FetchData = async () => {
    await axiosInstance
      .get<PollResponse>(`/poll/${params?.id}`)
      .then((response) => {
        if (response.status === 200) {
          setPoll(response.data.poll);
          setOptions(response.data.poll.options);

          console.log(response.data.poll);
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

  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(PointerSensor),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setOptions((options) => {
        const oldIndex = options.findIndex(
          (option) => option._id === active.id
        );
        const newIndex = options.findIndex((option) => option._id === over?.id);
        const newOptions = [...options];
        newOptions.splice(oldIndex, 1);
        newOptions.splice(newIndex, 0, options[oldIndex]);
        return newOptions;
      });
    }
  };

  const handleSubmit = async () => {
    console.log(options);
  };

  return (
    <div>
      <div className="flex justify-center w-full mb-6">
        <Wrapper>
          <Header
            title={poll?.title}
            creator="username"
            time={convertTime(poll?.createdAt)}
          />
          <p className="text-sm text-gray-300 my-4">Drag to sort the choices</p>
          <div className="mt-2 mb-6 w-full">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              {/* choice */}

              <SortableContext
                items={options?.map((option) => option._id)}
                strategy={verticalListSortingStrategy}
              >
                {options?.map((option) => {
                  return (
                    <Options
                      key={option._id}
                      id={option._id}
                      image={option.image_url}
                      option={option.option}
                    />
                  );
                })}
              </SortableContext>

              {/*  choices */}
            </DndContext>

            {/* choice */}
          </div>
          <Button
            text="button"
            handleClick={handleSubmit}
            variant="primary"
            type="submit"
            style="w-full py-1.5 my-2"
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default RankingPoll;
