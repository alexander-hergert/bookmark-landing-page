import React from "react";
import FAQItem from "./FAQItem";
import { faq } from "../../data";

const FAQ = () => {
  return (
    <section className="mb-28 w-[100vw] mt-20">
      <article className="p-5">
        <h2 className="text-center font-bold text-xl">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-neutral-grayish-blue my-5">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <article className="p-5">
        <div className="join join-vertical block m-auto max-w-screen-lg rounded-none">
          {faq.map((item) => (
            <FAQItem key={item.id} {...item} />
          ))}
        </div>
        <a
          className="p-2 h-[3rem] w-[7rem] rounded-lg block m-auto text-center shadow-xl capitalize bg-primary-soft-blue
           text-white mt-10 hover:bg-white hover:text-primary-soft-blue hover:border-2 hover:border-primary-soft-blue"
          href=""
        >
          More Info
        </a>
      </article>
    </section>
  );
};

export default FAQ;
