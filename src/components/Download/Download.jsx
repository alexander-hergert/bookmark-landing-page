import React from "react";
import { download } from "../../data";
import Card from "./Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";

const Download = () => {
  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      variants={fadeIn}
      viewport={{ once: true }}
      className="mt-20 w-[100vw]"
    >
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
        {download.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </article>
    </motion.section>
  );
};

export default Download;
