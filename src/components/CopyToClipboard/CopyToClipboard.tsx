import { useRef } from "react";

// util function
import { CopyToClipboard } from "../../Utils/utils";

// icons
import { Clipboard } from "lucide-react";

// toast
import { toast } from "react-toastify";

const CopytoClipboard = ({ link }: { link: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyToClipBoard = async () => {
    await CopyToClipboard(inputRef)
      .then(() => {
        toast.info("Link Copied to Clipboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not copy Link to clipboard");
      });
  };

  return (
    <div className="mt-6 flex w-full justify-center">
      <div className="flex items-center flex-col">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-base font-medium font-poppins">
            Share poll with others
          </h4>
          <p className="text-gray-400 text-sm text-center">
            Copy link to your clip board
          </p>
        </div>

        <div className="mt-2">
          <div className="relative flex items-center rounded-md gap-x-1.5 px-4 max-w-[16rem] bg-dark-20">
            <input
              disabled
              ref={inputRef}
              type="text"
              id="clipboard"
              name="clipboard"
              value={link}
              className="bg-inherit text-sm  block border-0 w-full px-2 p-3   placeholder-gray-400 text-gray-400"
              placeholder="password"
            />
            <div className="">
              <button
                className="bg-dark-10 hover:bg-secondary transition-colors duration-75 p-1.5 rounded-md"
                type="button"
                onClick={handleCopyToClipBoard}
              >
                <Clipboard size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopytoClipboard;
