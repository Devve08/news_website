"use client";

import FooterCurve from "./footerCurve";
import FooterDetailsSection from "./footerDetailsSection";
import {memo} from 'react'


const Footer = () => {
  return (
  <div className="w-full h-full relative">
    <FooterCurve />
    <FooterDetailsSection />
  </div>
  );
};

export default memo(Footer);
