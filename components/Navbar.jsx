import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[60] sm:px-2 md:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto pl-1 pr-2 md:px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center p-3"
        >
          <img
            alt="logo"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            data-nimg="1"
            className="cursor-pointer hover:animate-slowspin"
            src="/logo.jpg"
            style={{ borderRadius: "20%", padding: "15px" }}
          />
          <span className="font-bold sm:ml-[10px] text-xl block text-gray-300 ">
            Hasanali
          </span>
        </Link>
        <div className="w-fit lg:w-[500px] h-full hidden  md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center gap-x-10 lg:justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me" className="cursor-pointer">
              About me
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/hasanali-asadov-87775727a/"
          >
            <img
              alt="Linkedin"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/linkedin.svg"
            />
          </Link>
          <Link target="_blank" href="https://github.com/hasanasadov/">
            <img
              alt="Github"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/github.svg"
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/hasan.asadd/">
            <img
              alt="Instagram"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/instagram.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
