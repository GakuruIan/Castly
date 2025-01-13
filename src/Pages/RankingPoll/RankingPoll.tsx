import { useState } from "react";

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

// assets
import astronaut from "../../assets/astronaut.jpg";
import astronaut2 from "../../assets/astronaut2.jpg";
import astronaut3 from "../../assets/astronaut3.jpg";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Button from "../../components/Button/Button";

const RankingPoll = () => {
  const [options, setOptions] = useState([
    {
      id: 1,
      content: "Option 1",
      image: astronaut,
    },
    {
      id: 2,
      content: "Option 2",
      image: astronaut2,
    },
    {
      id: 3,
      content: "Option 3",
      image: astronaut3,
    },
  ]);

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
        const oldIndex = options.findIndex((option) => option.id === active.id);
        const newIndex = options.findIndex((option) => option.id === over?.id);
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
          <Header title="poll title" creator="username" time="30" />
          <p className="text-sm text-gray-300 my-4">Drag to sort the choices</p>
          <div className="mt-2 mb-6 w-full">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              {/* choice */}

              <SortableContext
                items={options}
                strategy={verticalListSortingStrategy}
              >
                {options.map((option) => {
                  return (
                    <Options
                      key={option.id}
                      id={option.id}
                      image={option.image}
                      content={option.content}
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
