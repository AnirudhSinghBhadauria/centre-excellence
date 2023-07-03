import React from "react";
import Card from "./Card";
import { courses } from "@/assets/data/appData";

const Courses = () => {
  return (
    <div id="course-cards" className="w-full bg-white pb-[100px]">
      <section className="primary-container flex flex-col lg:flex-row">
        {courses.map(
          ({ position, heading, link, description, buttonText, image }) => (
            <Card
              position={position}
              heading={heading}
              link={link}
              buttonText={buttonText}
              description={description}
              image={image}
            />
          )
        )}
      </section>
    </div>
  );
};

export default Courses;
