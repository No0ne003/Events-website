import Image from "next/image";

interface RefrencesItemProps {
  image: string;
}

const RefrencesItem: React.FC<RefrencesItemProps> = ({ image }) => {
  return (
    <div className="relative overflow-hidden h-[170px] min-w-[100px] flex justify-center items-center">
      <Image
        src={image}
        alt={image}
        width={130}
        height={800}
        className="grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-90"
      />
    </div>
  );
};

export default RefrencesItem;
