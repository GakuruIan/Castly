import { useEffect, useState } from "react";

import {
  Poll,
  OptionsResponse,
  PollResponse,
  rankOptions,
} from "../../interfaces";

// router
import { useParams, useNavigate } from "react-router-dom";

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
import CopytoClipboard from "../../components/CopyToClipboard/CopyToClipboard";

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

const RankingPoll = () => {
  const params = useParams();

  const navigation = useNavigate();

  const [poll, setPoll] = useState<Poll>();

  const [options, setOptions] = useState<OptionsResponse[]>([]);

  const FetchData = async () => {
    await axiosInstance
      .get<PollResponse>(`/poll/${params?.id}`)
      .then((response) => {
        if (response.status === 200) {
          setPoll(response.data.poll);
          setOptions(response.data.poll.options);
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(err);
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
    const rank_options: rankOptions = [];
    const maxScore = options.length;

    options.forEach((option, index) => {
      let rank_score = maxScore - index;
      let rank_position = index + 1;

      rank_options[index] = {
        option_id: option._id,
        rank_score,
        rank_position,
      };
    });

    const data = {
      poll_id: params.id,
      ranks: rank_options,
    };

    await axiosInstance
      .post("/vote", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Your vote was added successfully");
          navigation(`/poll/${params.id}/results`);
        }
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(err);
        toast.error(`${data.message}`);
      });
  };

  return (
    <div>
      <div className="flex justify-center w-full mb-6">
        <Wrapper>
          <Header
            title={poll?.title ? poll?.title : ""}
            creator="username"
            time={
              poll?.createdAt ? convertTime(poll.createdAt) : "Invalid date"
            }
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
            text="Submit"
            handleClick={handleSubmit}
            variant="primary"
            type="submit"
            style="w-full py-1.5 my-2"
          />

          <CopytoClipboard
            link={`${import.meta.env.VITE_CLIENT_BASE_URL}/ranking/${
              params?.id
            }/vote`}
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default RankingPoll;
