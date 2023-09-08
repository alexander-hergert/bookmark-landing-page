import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary-soft-blue py-14 w-[100vw]">
      <div className="px-20">
        <article className="text-center text-white py-10 w-full">
          <p className="text-sm mb-4 tracking-widest">
            35,000 + ALREADY JOINED
          </p>
          <h2 className="md:text-2xl">STAY up-to-date with what we're doing</h2>
        </article>
        <form
          className="  flex flex-col md:flex-row md:gap-3 justify-center items-center w-full"
          action=""
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="input input-bordered mb-4 md:m-0 w-full large"
          />
          <button
            className="btn border-none w-full small bg-primary-soft-red text-white"
            href=""
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
