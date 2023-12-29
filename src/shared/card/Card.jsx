const Card = ({ title, text, image }) => {
  return (
    <div className="bg-gray-200 w-[22rem] drop-shadow-[2rem] rounded-[1rem] overflow-hidden border h-fit drop-shadow-lg">
      <div className="py-[1rem] px-[1rem]">
        <h1 className="font-bold">{title}</h1>
        <p className="text-green-500">{text}</p>
      </div>
      <div className="flex justify-end ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
