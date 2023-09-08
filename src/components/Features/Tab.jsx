import React from "react";

const Tab = ({ handleClick, selectedFeature, title, id }) => {
  return (
    <div
      data-set={id}
      onClick={handleClick}
      className={`md:px-10 border-y md:border-t-0 py-5 relative cursor-pointer group ${
        id === "2" ? "max-sm:border-none" : ""
      }`}
    >
      {selectedFeature === id ? (
        <>
          <h3 className="pointer-events-none text-center">{title}</h3>
          <div
            className="absolute -bottom-[1px] pointer-events-none left-1/2 transform -translate-x-1/2 
           w-40 md:w-full h-2 md:h-1 bg-primary-soft-red"
          ></div>
        </>
      ) : (
        <>
          <h3
            className="pointer-events-none text-center text-neutral-grayish-blue
           group-hover:text-primary-soft-red"
          >
            {title}
          </h3>
        </>
      )}
    </div>
  );
};

export default Tab;
