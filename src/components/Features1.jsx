import { motion } from "framer-motion";

//Custom Inputs

import { FEAT1 } from "../config";
const { TEXT, IMAGES, } = FEAT1;


import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                {TEXT.HEADING}
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                {TEXT.HEADER}
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                {TEXT.SUBHEAD}
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{TEXT.CHECK1}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{TEXT.CHECK2}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{TEXT.CHECK3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={IMAGES.PIC1.src}
                  alt={IMAGES.PIC1.alt}
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={IMAGES.PIC2.src}
                  alt={IMAGES.PIC2.alt}
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={IMAGES.PIC3.src}
                  alt={IMAGES.PIC4.alt}
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={IMAGES.PIC4.src}
                  alt={IMAGES.PIC4.alt}
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
