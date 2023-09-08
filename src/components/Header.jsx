import React from "react";

const Header = () => {
  return (
    <header className="md:flex md:flex-row-reverse items-center w-[100vw] mt-10">
      <figure className=" relative overflow-hidden md:drop-shadow-2xl md:min-w-[50vw]">
        <img
          className="md:w-[30rem] md:relative m-auto md:mt-10 lg:w-[40rem]"
          src="/images/illustration-hero.svg"
          alt="hero"
        />
        <div
          className=" absolute top-28 md:top-28 lg:top-36 xl:top-44 left-1/4 z-[-1] w-full h-2/3 md:h-[26vh] 
        lg:h-[30vh] xl:h-[34vh] bg-primary-soft-blue rounded-bl-[12rem]"
        ></div>
      </figure>
      <article className="p-10 mt-4 md:min-w-[50vw] md:pl-[10%]">
        <h1 className="text-3xl text-center font-bold md:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="md:text-left text-neutral-grayish-blue text-center my-6">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            className=" hover:bg-white hover:border-primary-soft-blue hover:border-2
             hover:text-primary-soft-blue btn shadow-xl capitalize bg-primary-soft-blue border text-white"
            href=""
          >
            Get it on Chrom
          </a>
          <a
            className="hover:bg-white hover:border-neutral-grayish-blue hover:border-2
             hover:text-neutral-grayish-blue btn capitalize shadow-xl"
            href=""
          >
            Get it on Firefox
          </a>
        </div>
      </article>
    </header>
  );
};

export default Header;
