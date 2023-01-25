import React from "react";
import apotekImage from "../assets/img/apotek.png";
import photoGallery from "../assets/img/photo-gallery.png";
import pokemonImage from "../assets/img/pokemon.png";
import randomUser from "../assets/img/random.png";
import counterImage from "../assets/img/react-counter.png";
import wordReverse from "../assets/img/word-reverse.png";

function ProjectList() {
  const portfolio = [
    {
      id: 1,
      src: photoGallery,
      name: "Photo Gallery",
      href: "https://randika-fe2835657.netlify.app/",
    },
    {
      id: 2,
      src: pokemonImage,
      name: "Pokemon",
      href: "https://ran-pokemon.netlify.app/",
    },
    {
      id: 3,
      src: apotekImage,
      name: "Apotek",
      href: "https://apotekqyu.netlify.app/",
    },
    {
      id: 4,
      src: randomUser,
      name: "Random User",
      href: "https://randika-random-user.netlify.app/",
    },
    {
      id: 5,
      src: counterImage,
      name: "Counter",
      href: "https://randika-react-counter.netlify.app/",
    },
    {
      id: 6,
      src: wordReverse,
      name: "Word Reverse Generator",
      href: "https://randika-word-reverse-generator.netlify.app/",
    },
  ];

  return (
    <section name="portfolio" className="w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <article className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-6">Checkout my work here </p>
        </article>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, name, href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <a href={href}>
                <img src={src} alt="" className="rounded-md overflow-hidden" />
                <p className="text-center py-3">{name}</p>
              </a>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default ProjectList;
