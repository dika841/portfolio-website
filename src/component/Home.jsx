import React from "react";
import Hero from "../assets/img/hero.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <main name="home" className="w-full h-screen">
      <section className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <article className="flex flex-col justify-center h-full mt-10 text-center md:mt-0 md:text-justify items-center md:items-start ">
          <h2 className="text-4xl sm:text-7xl font-bold text-pink-800">
            Hello, I'm Randika
          </h2>
          <p className="py-4 text-pink-600 max-w-md md:max-w-7xl font-bold text-4xl">
            I'm Junior Front End Engineer
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </article>
        <figure>
          <img className="mx-auto w-2/4 md:2/3" src={Hero} alt="My Profile" />
        </figure>
      </section>
    </main>
  );
};

export default Home;
