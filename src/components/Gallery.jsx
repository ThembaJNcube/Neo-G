//import React, { useState } from "react";
import album from "./album";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-box hover:animate-pulse">
        <img src={album[0]} alt="gym 1" loading="lazy" />
      </div>
      <div className="gallery-box hover:animate-pulse">
        <img src={album[1]} alt="gym 2" loading="lazy" />
      </div>
      <div className="gallery-box hover:animate-pulse">
        <img src={album[2]} alt="gym 3" loading="lazy" />
      </div>
      <div className="gallery-box hover:animate-pulse">
        <img src={album[3]} alt="gym 4" loading="lazy" />
      </div>
      <div className="gallery-box hover:animate-pulse">
        <img src={album[4]} alt="gym 5" loading="lazy" />
      </div>

      <div className="gallery-text">
        <h1>
          This is the{" "}
          <span className="text-[#bb2929] animate-pulse font-bold">
            Next Level !
          </span>
        </h1>
      </div>
    </div>
  );
}
