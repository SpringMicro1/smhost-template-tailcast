import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
// Import Custom
import { TESTS } from "../config";
const { TEXT, } = TESTS;

import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          {TEXT.HEADING}
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          {TEXT.HEADER}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              {TEXT.Q1}
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial1} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  {TEXT.N1}
                </div>
                <div className="custom-content-text-gray">
                  {TEXT.J1}
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              {TEXT.Q2}
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial2} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  {TEXT.N2}
                </div>
                <div className="custom-content-text-gray">
                  {TEXT.J2}
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              {TEXT.Q3}
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial3} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  {TEXT.N3}
                </div>
                <div className="custom-content-text-gray">
                  {TEXT.J3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
