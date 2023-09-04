import React from "react";

const Download = () => {
  return (
    <section className="p-5">
      <article className="my-10">
        <h2 className="text-center font-bold text-xl">
          Download the extension
        </h2>
        <p className="my-5 text-center text-neutral-grayish-blue">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </article>
      <article className="flex justify-center items-center flex-col md:flex-row">
        <div className=" m-10 card w-80 bg-base-100 shadow-xl md:relative md:bottom-10">
          <figure className="px-10 pt-10">
            <img
              src="/images/logo-chrome.svg"
              alt="chrome"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0 items-center text-center">
            <h2 className="card-title mt-5">Add to Chrome</h2>
            <p className="text-neutral-grayish-blue text-sm">
              Minimum version 62
            </p>
            <div className="bg-image pt-10 w-full h-full"></div>
            <div className="card-actions">
              <button className="capitalize btn bg-primary-soft-blue px-10 mb-5 text-white">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
        <div className=" m-10 card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/logo-firefox.svg"
              alt="chrome"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0 items-center text-center">
            <h2 className="card-title mt-5">Add to Firefox</h2>
            <p className="text-neutral-grayish-blue text-sm">
              Minimum version 55
            </p>
            <div className="bg-image pt-10 w-full h-full"></div>
            <div className="card-actions">
              <button className="capitalize btn bg-primary-soft-blue px-10 mb-5 text-white">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
        <div className=" m-10 card w-80 bg-base-100 shadow-xl md:relative md:top-10">
          <figure className="px-10 pt-10">
            <img
              src="/images/logo-opera.svg"
              alt="chrome"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0 items-center text-center">
            <h2 className="card-title mt-5">Add to Opera</h2>
            <p className="text-neutral-grayish-blue text-sm">
              Minimum version 46
            </p>
            <div className="bg-image pt-10 w-full h-full"></div>
            <div className="card-actions">
              <button className="capitalize btn bg-primary-soft-blue px-10 mb-5 text-white">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Download;
