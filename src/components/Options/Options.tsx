import React from "react";

// lucide icons
import { Grip } from "lucide-react";

// dnd
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface OptionsProps {
  id: number | string;
  image: string | null;
  option: string;
}

const Options: React.FC<OptionsProps> = ({ id, image, option }) => {
  const stringId = id.toString();

  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id: stringId });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex items-center justify-between mb-2 hover:bg-dark-20 p-2 rounded-md border-b border-dark-20"
    >
      <div className="flex items-center">
        {image && (
          <div className="me-4">
            <img src={image} alt="astronaut" className="h-12 w-12 rounded-md" />
          </div>
        )}

        <p className="text-base font-medium text-gray-300">{option}</p>
      </div>
      {/* drag icon */}
      <Grip size={20} />
      {/* drag icon */}
    </div>
  );
};

export default Options;
