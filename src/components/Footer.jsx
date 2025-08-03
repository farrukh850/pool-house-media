import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pb-8 pt-5">
      <div className="container px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <p className="text-base text-center lg:text-left lg:text-[25px] leading-[29px] text-white uppercase">A Sunshine Coast content house creating premium property <br />   visuals and personal branding content for top agents.</p>
          <ul className="flex flex-col items-center lg:items-start">
            <li><Link to="mailto:bailey@poolhousemedia.com.au" className="text-base lg:text-[30px] leading-[34px] text-white">bailey@poolhousemedia.com.au</Link></li>
            <li className="text-base lg:text-[30px] leading-[34px] text-white"><Link to="tel:0427 898 799">0427 898 799</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
