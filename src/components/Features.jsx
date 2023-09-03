import React, { useState } from "react";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("1");

  const handleClick = (e) => {
    const dataSetValue = e.target.getAttribute("data-set");
    setSelectedFeature(dataSetValue);
  };

  return (
    <section>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center">Features</h2>
        <p className="text-neutral-grayish-blue my-4 text-center">
          Features Our aim is to make it quick and easy for you to access your
          favourite websites. Your bookmarks sync between your devices so you
          can access them on the go.
        </p>
      </div>
      <div className="md:flex md:justify-center p-5">
        <div
          data-set="1"
          onClick={handleClick}
          className="md:px-10 border-y md:border-t-0 py-5 relative cursor-pointer"
        >
          {selectedFeature === "1" ? (
            <>
              <h3 className="pointer-events-none text-center">
                Simple Bookmarking
              </h3>
              <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-0 w-40 md:w-full h-2 md:h-1 bg-primary-soft-red"></div>
            </>
          ) : (
            <>
              <h3 className="pointer-events-none text-center text-neutral-grayish-blue">
                Simple Bookmarking
              </h3>
            </>
          )}
        </div>
        <div
          data-set="2"
          onClick={handleClick}
          className="md:px-10 md:border-b md:border-t-0 py-5 relative cursor-pointer"
        >
          {selectedFeature === "2" ? (
            <>
              <h3 className="pointer-events-none text-center">
                Speedy Searching
              </h3>
              <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-0 w-40 md:w-full h-2 md:h-1 bg-primary-soft-red"></div>
            </>
          ) : (
            <>
              <h3 className="pointer-events-none text-center text-neutral-grayish-blue">
                Speedy Searching
              </h3>
            </>
          )}
        </div>
        <div
          data-set="3"
          onClick={handleClick}
          className="md:px-10 border-y md:border-t-0 py-5 relative cursor-pointer"
        >
          {selectedFeature === "3" ? (
            <>
              <h3 className="pointer-events-none text-center">Easy Sharing</h3>
              <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-0 w-40 md:w-full h-2 md:h-1 bg-primary-soft-red"></div>
            </>
          ) : (
            <>
              <h3 className="pointer-events-none text-center text-neutral-grayish-blue">
                Easy Sharing
              </h3>
            </>
          )}
        </div>
      </div>
      {selectedFeature === "1" && (
        <div className="md:flex items-center mt-10">
          <figure className="relative overflow-hidden md:drop-shadow-2xl md:min-w-[50vw]">
            <img
              className="p-10 md:w-large md:relative m-auto md:mt-10 lg:w-very-large"
              src="/images/illustration-features-tab-1.svg"
              alt="bookmark"
            />
            <div className="absolute top-28 md:top-28 lg:top-36 xl:top-44 rigth-1/4 z-[-1] w-3/4 h-2/3 md:h-[26vh] lg:h-[30vh] xl:h-[34vh] bg-primary-soft-blue brd-rad-r"></div>
          </figure>
          <article className="p-10 mt-4 md:min-w-[50vw]">
            <h2 className="text-3xl text-center font-bold md:text-left">
              Bookmark in one click
            </h2>
            <p className="md:text-left text-neutral-grayish-blue text-center my-6">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
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
      )}
      {selectedFeature === "2" && (
        <div className="md:flex items-center mt-10">
          <figure className="relative overflow-hidden md:drop-shadow-2xl md:min-w-[50vw]">
            <img
              className="p-10 md:w-large md:relative m-auto md:mt-10 lg:w-very-large"
              src="/images/illustration-features-tab-2.svg"
              alt="bookmark"
            />
            <div className="absolute top-28 md:top-28 lg:top-36 xl:top-44 rigth-1/4 z-[-1] w-3/4 h-2/3 md:h-[26vh] lg:h-[30vh] xl:h-[34vh] bg-primary-soft-blue brd-rad-r"></div>
          </figure>
          <article className="p-10 mt-4 md:min-w-[50vw]">
            <h2 className="text-3xl text-center font-bold md:text-left">
              Intelligent search
            </h2>
            <p className="md:text-left text-neutral-grayish-blue text-center my-6">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
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
      )}
      {selectedFeature === "3" && (
        <div className="md:flex items-center mt-10">
          <figure className="relative overflow-hidden md:drop-shadow-2xl md:min-w-[50vw]">
            <img
              className="p-10 md:w-large md:relative m-auto md:mt-10 lg:w-very-large"
              src="/images/illustration-features-tab-3.svg"
              alt="bookmark"
            />
            <div className="absolute top-28 md:top-28 lg:top-36 xl:top-44 rigth-1/4 z-[-1] w-3/4 h-2/3 md:h-[26vh] lg:h-[30vh] xl:h-[34vh] bg-primary-soft-blue brd-rad-r"></div>
          </figure>
          <article className="p-10 mt-4 md:min-w-[50vw]">
            <h2 className="text-3xl text-center font-bold md:text-left">
              Share your bookmarks
            </h2>
            <p className="md:text-left text-neutral-grayish-blue text-center my-6">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
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
      )}
    </section>
  );
};

export default Features;
