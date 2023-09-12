"use client";

import { company, more, product, services } from "@/app/kits/constants";
import { images } from "@/app/kits/images";
import Image from "next/image";
import FooterColumn from "./footerColumn";

const FooterDetailsSection = () => {
  return (
    <div className="absolute w-full h-auto sm:h-full sm:top-0 top-[15%]">
      <div className="w-full h-full flex  flex-col sm:flex-col-reverse items-center gap-y-20 md:pb-0 pb-10 sm:justify-start md:justify-between md:flex-row px-4 sm:px-10 gap-x-2 md:px-16">
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-2/4 md:p-4">
          <div className="text-white font-semibold text-xl mb-8 text-center md:text-start w-full ">
            Get our stories delivered From us to your inbox weekly.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-center md:justify-start mb-4 ">
            <input
            placeholder="Your Email"
              type="email"
              className="bg-white p-2 rounded w-12/12 sm:w-6/12 outline-none"
            />
            <button className="bg-text_secondary rounded px-2 md:px-6 py-2 text-xs text-white font-medium w-12/12 sm:w-2/12  md:w-4/12">
              Get started
            </button>
          </div>
          <div className="text-secondary text-center md:text-start text-xs">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </div>
        </div>
        <div className="relative w-full sm:flex flex-col justify-end md:justify-center items-center md:w-1/2 h-0 sm:h-full hidden ">
          <div className="bg-white flex flex-col gap-4 w-2/3 md:h-2/5  sm:h-2/4 rounded-md z-50 p-2 ">
            <div className="bg-[#FC5A5A] w-full rounded-md h-1/2"></div>
            <div className="text-primary font-semibold text-base">The best aticles every week</div>
            <div className="text-primary font-normal text-xs">Our insurance plans offers are priced the same everywhere else.</div>
          </div>
          <div className="w-2/3 md:h-2/5 sm:h-2/4 rounded-md absolute ">
            <div className="w-full">
              <div className="w-1/3 md:1/2 bg-text_secondary aspect-square rounded-md absolute -right-[15%] top-[10%]"></div>
            </div>
            <div className="w-full">
              <div className="bg-white md:1/2 opacity-10 w-1/3 aspect-square rounded-md absolute -left-[15%] -bottom-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-4/5 mx-auto my-10 h-[1px] bg-secondary"></div>
      <div className="bg-primary flex-wrap flex px-4 sm:px-10 md:px-16 flex-col-reverse sm:flex-row w-full items-center sm:items-start justify-start">
        <div className="flex flex-col items-center sm:items-start gap-y-4 p-4 w-full sm:w-1/3 md:w-1/5">
          <div className=" w-20 h-6 relative z-50">
            <Image  src={images.logoWhite} alt={""} height={0} width={0} className="h-full w0-full" />
          </div>
          <div className="text-secondary text-sm text-center sm:text-start">
            Build a modern and creative website with crealand
          </div>
          <div className="flex flex-row gap-2">
            {Array(5)
              .fill(5)
              .map((item, index) => (
                <div key={index} className="rounded-full bg-[#FC5A5A] h-5 w-5"></div>
              ))}
          </div>
        </div>
        <div className="p-4 flex flex-col md:flex-row gap-x-16 gap-y-10">
          <div className="flex flex-row gap-16">
            <FooterColumn arr={product} title={"Product"} />
            <FooterColumn arr={services} title={"Services"} />
          </div>
          <div className="flex flex-row gap-16">
            <FooterColumn arr={company} title={"Company"} />
            <FooterColumn arr={more} title={"More"} />
          </div>
        </div>
      </div>
      <div className="bg-primary py-10 sm:flex flex-col items-center justify-center hidden gap-4">
        <Image src={images.heart} alt={""} height={50} width={50} />
        <div className="text-secondary text-center text-sm">
          Copyright © 2019. Crafted with love.
        </div>
      </div>
    </div>
  );
};

export default FooterDetailsSection;
