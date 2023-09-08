import React from "react";

const Card = ({ title, src, alt, version }) => {
  let position;
  if (alt === "chrome-icon") position = "md:relative md:bottom-10";
  if (alt === "firefox-icon") position = "";
  if (alt === "opera-icon") position = "md:relative md:top-10";

  return (
    <div className={`md:min-w-[14rem] m-5 card w-80 bg-base-100 shadow-xl ${position}`}>
      <figure className="px-10 pt-10">
        <img src={src} alt={alt} className="rounded-xl" />
      </figure>
      <div className="card-body p-0 items-center text-center">
        <h2 className="card-title mt-5">{title}</h2>
        <p className="text-neutral-grayish-blue text-sm">{version}</p>
        <div className="bg-image pt-10 w-full h-full"></div>
        <div className="card-actions">
          <a
            href=""
            className="px-10 md:px-2 lg:px-10 btn bg-primary-soft-blue mb-5 text-white
            hover:bg-white hover:text-primary-soft-blue hover:border-2 hover:border-primary-soft-blue"
          >
            Add & Install Extension
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
