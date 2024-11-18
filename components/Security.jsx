import React from "react";
const Security = () => {
  return (
    <div className="flex flex-col relative items-center justify-center lg:min-h-screen w-full h-full z-50 my-5 lg:mb-0 px-4">
      <div className="lg:absolute w-auto h-auto top-0 z-[5]">
        <div className="text-[40px] font-medium text-center text-gray-200">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &amp;{" "}
          </span>
          Security
        </div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute top-40 lg:top-auto z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            alt="Lock top"
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            style={{ color: "red" }}
            src="/lockTop.png"
          />
          <img
            alt="Lock Main"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            data-nimg="1"
            className=" z-10"
            style={{ color: "transparent" }}
            src="/LockMain.png"
          />
        </div>
        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute top-80 lg:top-auto z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
      <div className="w-full flex items-start justify-center top-20 sm:-top-8 md:-top-10 lg:top-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[100%] h-[100%] object-cover"
          src="/encryption.webm/"
        ></video>
      </div>
    </div>
  );
};

export default Security;
