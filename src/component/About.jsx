import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a student pursuing a degree in technology. I have experience in
          web programming, especially in front-end development using HTML, CSS
          and JavaScript. I also have skills in using javascript liblary like
          React and CSS frameworks like Tailwind. I am very interested in doing
          an internship in front-end web development and am confident that I can
          add positive value to the company.
        </p>
      </div>
    </section>
  );
};

export default About;
