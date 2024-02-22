import Image from "next/image";
import { LiveItem } from "../_types/app";

const LiveCard = ({ img, title }: LiveItem) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="live-card" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
