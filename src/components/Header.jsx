import React from "react";

const Header = () => {
  return (
    <header className="md:flex md:flex-row-reverse items-center">
      <figure className="overflow-hidden md:drop-shadow-2xl md:min-w-[50vw]">
        <img
          className="md:w-large md:relative m-auto md:mt-10 lg:w-very-large"
          src="/images/illustration-hero.svg"
          alt="hero"
        />
        <div className=" absolute top-40 md:top-28 lg:top-36 xl:top-44 left-1/4 z-[-1] w-full h-1/3 md:h-[26vh] lg:h-[30vh] xl:h-[34vh] bg-primary-soft-blue brd-rad-l"></div>
      </figure>
      <article className="p-10 mt-4 md:min-w-[50vw]">
        <h1 className="text-3xl text-center font-bold md:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="md:text-left text-neutral-grayish-blue text-center my-6">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            className="btn shadow-xl capitalize bg-primary-soft-blue text-white"
            href=""
          >
            Get it on Chrome
          </a>
          <a className="btn capitalize shadow-xl" href="">
            Get it on Firefox
          </a>
        </div>
      </article>
    </header>
  );
};

export default Header;
