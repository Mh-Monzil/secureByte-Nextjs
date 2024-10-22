import Image from "next/image";
import React from "react";
import image from "/public/work.jpg";


const HowWeWork = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold md:font-bold">
        How We Work?
      </h3>
      <div>
        <Image
          src={image}
          alt="how we work"
          width={400}
          height={200}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
