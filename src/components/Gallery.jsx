import React from "react";
import { motion } from "framer-motion";
import { GALLERY } from "../constants";

function Gallery() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Gallery
      </motion.h2>
      <div className="flex flex-wrap -mx-3">
        {GALLERY.map((item, index) => {
          return (
            <div
              className=" sm:w-1/2 lg:w-1/3 px-3 mb-4   cursor-pointer"
              key={index}
            >
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                src={item.image}
                loading="lazy"
                className="w-full h-full max-w-[400px] max-h-[400px] object-cover rounded-lg"
                alt="gallery"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
