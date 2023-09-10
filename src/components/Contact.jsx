import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { shake } from "../animations";

const Contact = () => {
  const [scope, animate] = useAnimate();
  const [isError, setError] = useState(false);
  const regEmail = /[A-Za-z0-9\-\_\.\+]{1,64}@[A-Za-z0-9\-\_\.]+\.[a-zA-Z]+/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    if (!regEmail.test(input)) {
      setError(true);
      animate(scope.current, shake.animation, shake.duration);
    } else {
      e.target.submit();
    }
  };

  const handleFocus = () => {
    setError(false);
  };

  return (
    <section className="bg-primary-soft-blue py-14 w-[100vw] h-[24rem] md:h-[22rem]">
      <div className="px-20 max-sm:px-10">
        <article className="text-center text-white py-10 w-full">
          <p className="text-sm mb-4 tracking-widest">
            35,000 + ALREADY JOINED
          </p>
          <h2 className="md:text-2xl">Stay up-to-date with what we're doing</h2>
        </article>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:gap-5 justify-center items-start w-full"
          action=""
        >
          <div ref={scope} className=" relative md:m-0 w-full md:max-w-[20rem]">
            <input
              onFocus={handleFocus}
              aria-label="email"
              type="text"
              placeholder="Enter your email address"
              className={`${
                isError
                  ? "error mb-0 border-2 border-primary-soft-red rounded-b-none"
                  : "mb-4"
              } input input-bordered w-full`}
            />
            {isError && (
              <div
                className={`${
                  isError ? "mb-4 py-1 error " : ""
                }  text-white italic rounded-b-lg bg-primary-soft-red w-full px-2 text-sm mt-0`}
              >
                Whoops, make sure it's an email
              </div>
            )}
          </div>
          <button
            className="btn border-none w-full md:max-w-[10rem] bg-primary-soft-red text-white
            hover:bg-white hover:text-primary-soft-red hover:border-solid hover:border-2 hover:border-primary-soft-red"
            href=""
          >
            Contact Us
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
