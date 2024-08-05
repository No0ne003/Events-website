import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface RefrencesItemProps {
  image: string;
}

const RefrencesItem: React.FC<RefrencesItemProps> = ({ image }) => {
  return (
    <div className="group relative overflow-hidden h-[150px] w-[60px] md:w-[80px] mx-5 md:mx-14 flex justify-center items-center">
      <Image
        src={image}
        alt={image}
        width={130}
        height={600}
        className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-90"
      />
    </div>
  );
};

export default RefrencesItem;
