import React from "react";
import Card from "./Card";
import { courses } from "@/assets/data/appData";

const Courses = () => {
  return (
    <div className="w-full bg-white pb-[100px]">
      <section className="primary-container flex flex-col lg:flex-row">
        {courses.map(
          ({
            position,
            heading,
            link,
            description,
            buttonText,
            image,
            title,
            target
          }) => (
            <Card
              title={title}
              key={heading}
              position={position}
              heading={heading}
              link={link}
              buttonText={buttonText}
              description={description}
              image={image}
              target={target}
            />
          )
        )}
      </section>
    </div>
  );
};

export default Courses;
