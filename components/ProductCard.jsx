import React from "react";

const ProductCard = () => {
  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="relative pb-6 h-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-40">
        <img
          alt="Danotion"
          loading="lazy"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="w-full object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fproject-images%2Fdanotion.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fproject-images%2Fdanotion.png&amp;w=2048&amp;q=75 2x"
          src="/_next/image?url=%2Fproject-images%2Fdanotion.png&amp;w=2048&amp;q=75"
        />
        <div className=" p-4">
          <div>
            <a target="_blank" href="https://dadanotion.vercel.app/">
              <h1 className="font-semibold text-white text-3xl w-fit flex items-center gap-x-2 border-b-2 border-transparent hover:border-b-white duration-100">
                Danotion
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="w-6 h-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                </svg>
              </h1>
            </a>
            <h2 className="font-semibold text-white/70 text-lg">
              Notion clone
            </h2>
          </div>
          <p
            className="
    mt-4 text-gray-300/80 leading-7 tracking-wide 
    line-clamp-4
  "
          >
            Crafted with Next.js 13, React, Convex, and Tailwind, this Notion
            Clone boasts real-time database capabilities, a Notion-style editor,
            and light/dark mode options. The application supports infinite
            children documents, a trash can with soft delete, and comprehensive
            authentication features. Users can upload, delete, and replace
            files, with real-time icon changes for each document. The expandable
            sidebar, full mobile responsiveness, and the ability to publish
            notes to the web enhance the user experience. Additional features
            include a fully collapsible sidebar, a landing page, cover images
            for documents, and the option to recover deleted files.
          </p>
          <button className="button-primary mt-6  text-white p-2">
            Read More
          </button>
          <a
            target="_blank"
            className="absolute top-3 right-3 flex w-fit items-center bg-[#c9c9c98f] rounded-full p-2 hover:bg-[#7474748f] duration-100"
            href="https://github.com/Suleyman1406/notion-clone"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="w-7 h-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
