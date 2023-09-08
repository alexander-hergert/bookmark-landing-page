import React from "react";

const Detail = ({ title, src, content }) => {
  return (
    <div
      className="md:flex items-center md:h-[40rem] 
    lg:h-[30rem] xl:h-[35rem] mt-10"
    >
      <figure
        className=" relative overflow-hidden 
      md:drop-shadow-2xl md:min-w-[50vw] md:pb-[4rem] md:h-[40rem]"
      >
        <img
          className="p-10 w-[85vw] md:relative m-auto 
          md:mt-10 md:w-full md:max-w-[40rem]"
          src={src}
          alt="bookmark"
        />
        <div
          className="absolute rounded-tr-[50%] top-24 md:top-36 
        lg:top-32 xl:top-40 xl:right-[35%] z-[-1] w-3/4 max-md:h-2/3 
        md:h-[18rem] lg:h-[24rem] xl:h-[28rem]
         bg-primary-soft-blue rounded-br-[12rem]"
        ></div>
      </figure>
      <article className="p-10 mt-4 md:min-w-[50vw]">
        <h2 className="text-3xl text-center font-bold md:text-left">{title}</h2>
        <p className="md:text-left text-neutral-grayish-blue text-center my-6">
          {content}
        </p>
        <div className="max-md:hidden flex gap-4 justify-center md:justify-start">
          <a
            className="btn shadow-xl capitalize bg-primary-soft-blue text-white"
            href=""
          >
            More Info
          </a>
        </div>
      </article>
    </div>
  );
};

export default Detail;
