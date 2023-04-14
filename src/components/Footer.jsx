import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

import { FOOT } from "../config";
const { TEXT, LINKS, } = FOOT;

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  {TEXT.HEADER}
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                {TEXT.SUBHEAD}
                <a
                  href={LINKS.HEADLINK.href}
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                   {LINKS.HEADLINK.content}
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href={LINKS.FACEBOOK.href}
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href={LINKS.TWITTER.href}
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href={LINKS.INSTAGRAM.href}
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">{TEXT.B1}</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B1L1.href} aria-label="" >
                     {LINKS.B1L1.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B1L2.href} aria-label="" >
                      {LINKS.B1L2.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B1L3.href} aria-label="" >
                      {LINKS.B1L3.content}
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B1L4.href} aria-label="" >
                    {LINKS.B1L4.content}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {TEXT.B2}
                </h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L1.href} aria-label="" >
                     {LINKS.B2L1.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L2.href} aria-label="" >
                     {LINKS.B2L2.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L3.href} aria-label="" >
                    {LINKS.B2L3.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L4.href} aria-label="" >
                    {LINKS.B2L4.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L5.href} aria-label="" >
                    {LINKS.B2L5.content}
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B2L6.href} aria-label="" >
                    {LINKS.B2L6.content}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">{TEXT.B3}</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B3L1.href} aria-label="" >
                      {LINKS.B3L1.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B3L2.href} aria-label="" >
                      {LINKS.B3L2.content}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B3L3.href} aria-label="" >
                    {LINKS.B3L3.content}
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href={LINKS.B3L4.href} aria-label="" >
                     {LINKS.B3L4.content}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            {TEXT.COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  );
};