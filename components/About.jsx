import React from "react";

const About = () => {
  return (
    <div className="flex flex-row xl:w-[1240px] 2xl:w-[1440px] mx-auto items-center gap-x-20 px-4 md:px-10 lg:px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center  text-start mt-6 md:mt-0">
        <div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          style={{ opacity: 1, transform: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="text-[#b49bff] mr-[10px] h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="Welcome-text text-[13px]">Software Engineer</h1>
        </div>
        <div className="flex flex-col gap-6 md:mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </div>
        <p className="text-base lg:text-lg text-gray-400 my-5 max-w-[600px]">
          I'm an innovative Front-end Developer who has made software a part of
          his life. I care about taking responsibility, communicating clearly,
          and doing the job on time.
        </p>
        <a className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Learn More!
        </a>
      </div>
      <div className="w-full h-full hidden md:flex justify-center items-center">
        <img
          alt="work icons"
          loading="lazy"
          width="650"
          height="650"
          decoding="async"
          data-nimg="1"
          style={{ color: "transparent" }}
          src="/mainIconsdark.svg"
        />
      </div>
    </div>
  );
};

export default About;
