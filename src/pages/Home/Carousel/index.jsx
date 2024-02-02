import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";

export default function Carousel({ images }) {
  const imagesList = [1, 2, 3]

  return (
    <div className="bg-red-200 relative">
      <div className="flex">
        {imagesList.map(image => (
          <div id="imageExample" className="shrink-0 w-full border h-[500px]">{image}</div>
        ))}
      </div>
      <div className="flex px-4 w-full justify-between absolute top-1/2 -translate-y-1/2">
        <button>
          <IoIosArrowRoundBack size={50} />
        </button>
        <button>
          <IoIosArrowRoundForward size={50} />
        </button>
      </div>
      <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2">
        {imagesList.map(() => (
          <button className="text-2xl">•</button>
        ))}
      </div>
    </div>
  )
}