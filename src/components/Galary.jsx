import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import slides from "./slides";
//import "bootstrap/dist/css/bootstrap.css";
//Galary({ slides });

//console.log(slides);
export default function Galary() {
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  //console.log(current);
  let k = slides[current];
  //console.log(k);

  return (
    <div>
      <div className="overflow-hidden relative w-[50%] m-auto pt-11">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img src={s.src} alt="gym" key={s.id} />;
          })}
        </div>
        <div
          className="absolute top-0 h-full w-full flex justify-between items-center
        text-white px-10 text-5xl"
        >
          <button className="animate-pulse">
            <BsArrowLeftSquareFill onClick={previousSlide} />
          </button>
          <button className="animate-pulse">
            <BsArrowRightSquareFill onClick={nextSlide} />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 w-full flex justify-center gap-2">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer 
              ${i === current ? "bg-red-900" : "bg-gray-300"}`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="text-white w-[50%] mx-[43%] py-10 my-6">
        <h1>{k.heading}</h1>
        <p>{k.message}</p>
      </div>
      <h1 className="text-[#b91414] w-full mx-[40%] text-4xl">
        Working on Responsiveness 👨‍🔧
      </h1>
    </div>
  );
}
