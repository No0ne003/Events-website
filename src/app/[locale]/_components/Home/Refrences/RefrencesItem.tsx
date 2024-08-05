import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface RefrencesItemProps {
  image: string;
}

const RefrencesItem: React.FC<RefrencesItemProps> = ({ image }) => {
  return (
    <div className="group relative overflow-hidden h-[100px] w-[40px] md:w-[60px] mx-5 md:mx-12 flex justify-center items-center">
      <Image src={image} alt={image} width={130} height={600} />
    </div>
  );
};

export default RefrencesItem;
