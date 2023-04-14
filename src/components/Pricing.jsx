import { useState } from "react";
import { motion } from "framer-motion";
//CUSTOM IMPORTS
import { PRICE } from "../config";
const { TEXT, } = PRICE;


import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                {TEXT.HEADING}
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                {TEXT.HEADER}
              </h2>
              <p className="mb-6 text-customGrayText">
                {TEXT.SUBHEAD}
              </p>
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    {TEXT.B1}
                  </div>
                  <div className={isMonthly && "text-gray-400"}>{TEXT.B2}</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {TEXT.B1TITLE}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {TEXT.B1PRICE}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? TEXT.TIMEPRICE1 : TEXT.TIMEPRICE2}
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {TEXT.B1DESC}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B1CHECK1}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B1CHECK2}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B1CHECK3}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B1CHECK4}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B1CHECK5}</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    {TEXT.B1BUTTON}
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    {TEXT.B2TITLE}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? TEXT.B2PRICE1 : TEXT.B2PRICE2}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? TEXT.TIMEPRICE1 : TEXT.TIMEPRICE2}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    {TEXT.B2DESC}
                  </p>
                  <ul className="mb-14 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B2CHECK1}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B2CHECK2}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B2CHECK3}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B2CHECK4}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B2CHECK5}</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    {TEXT.B2BUTTON}
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {TEXT.B3TITLE}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? TEXT.B3PRICE1 : TEXT.B3PRICE2}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? TEXT.TIMEPRICE1 : TEXT.TIMEPRICE2}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {TEXT.B3DESC}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B3CHECK1}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B3CHECK2}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B3CHECK3}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B3CHECK4}</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>{TEXT.B3CHECK5}</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    {TEXT.B3BUTTON}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
