
// icon
import {
    EllipsisVertical,
    FilePenLine,
    Settings2,
    ExternalLink,
    ChartArea,
    Trash,
  } from "lucide-react";

// router
import { Link } from "react-router-dom";

interface props{
    title:string,
    creator:string,
    time:string
}

const Header:React.FC<props> = ({title,creator,time}) => {
  return (
    <header className="flex items-center justify-between border-b pb-2 border-b-dark-20">
    <div className="block">
      <h2 className="text-xl mb-1">{title}</h2>
      <p className="text-xs tracking-wide text-gray-400">
        By {creator} <span>at {time} minutes ago</span>
      </p>
    </div>

    <div className="relative">
      <button className=" bg-dark-20 h-10 w-10 rounded-full flex items-center justify-center">
        <EllipsisVertical size={18} />
      </button>

      {/* dropdown */}
      <div
        id="dropdown"
        className="z-10 absolute top-10 right-[-6px] hidden  rounded-lg shadow w-44 bg-dark-50"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {/* link */}
          <li className="mb-2 px-2 py-3 hover:bg-dark-20 hover:text-white">
            <Link to="/" className=" flex items-center gap-x-2">
              <FilePenLine size={18} />
              Edit
            </Link>
          </li>
          {/* link */}

          {/* link */}
          <li className="mb-2 px-2 py-3 hover:bg-dark-20 hover:text-white">
            <Link to="/" className=" flex items-center gap-x-2">
              <Settings2 size={18} />
              Poll settings
            </Link>
          </li>
          {/* link */}

          {/* link */}
          <li className="mb-2 px-2 py-3 hover:bg-dark-20 hover:text-white">
            <Link to="/poll/1/results" className=" flex items-center gap-x-2">
              <ChartArea size={18} />
              Vote analysis
            </Link>
          </li>
          {/* link */}

          {/* link */}
          <li className="mb-2 px-2 py-3 hover:bg-dark-20 hover:text-white">
            <Link to="/" className=" flex items-center gap-x-2">
              <ExternalLink size={18} />
              Share
            </Link>
          </li>
          {/* link */}

          {/* link */}
          <li className=" px-2 py-3 border-t text-red-400 border-t-gray-600 hover:bg-dark-20 hover:text-red-500">
            <Link to="/" className=" flex items-center gap-x-2">
              <Trash size={18} />
              Delete
            </Link>
          </li>
          {/* link */}
        </ul>
      </div>
      {/* dropdown */}
    </div>
  </header>
  )
}

export default Header