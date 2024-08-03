import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface RefrencesItemProps {
  image: string;
}

const RefrencesItem: React.FC<RefrencesItemProps> = ({ image }) => {
  return (
    <div className="group relative overflow-hidden h-[150px] min-w-[80px] flex justify-center items-center">
      <Image
        src={image}
        alt={image}
        width={130}
        height={800}
        className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-90"
      />
    </div>
  );
};

export default RefrencesItem;
