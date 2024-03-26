//import React, { useState } from "react";
import album from "./album";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-box">
        <img src={album[0]} alt="gym 1" />
      </div>
      <div className="gallery-box">
        <img src={album[1]} alt="gym 1" />
      </div>
      <div className="gallery-box">
        <img src={album[2]} alt="gym 1" />
      </div>
      <div className="gallery-box">
        <img src={album[3]} alt="gym 1" />
      </div>
      <div className="gallery-box">
        <img src={album[4]} alt="gym 1" />
      </div>
      <div className="gallery-box">
        <img src={album[5]} alt="gym 1" />
      </div>
      <div className="gallery-text">
        <h1>
          This is the{" "}
          <span className="text-[#721b1b] animate-pulse font-bold">
            Next Level !
          </span>
        </h1>
      </div>
    </div>
  );
}
