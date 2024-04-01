import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[250px] h-[500px] border-2 flex flex-col justify-evenly shadow-2xl">
      <img
        src={data.image}
        alt={data.id}
        className="w-[150px] h-[150px] mx-auto p-4"
      />
      <h1 className="p-4">{data.title.slice(0,40)}</h1>
      <p className="p-4">{data.description.slice(0, 130) + "..."}</p>
      <div className="p-4 flex justify-between">
        <span>{data.price}</span>
        <p>{data.category}</p>
      </div>
      <div className="flex justify-between p-4">
        <p>{data.rating.rate}</p>
        <span>{data.rating.count}</span>
      </div>
    </div>
  );
};

export default Card;
