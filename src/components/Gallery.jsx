//import React, { useState } from "react";
import album from "./album";

export default function Gallery() {
  return (
    <div className="gallery-container">
      {album.map((s) => {
        return (
          <div className="gallery-box hover:animate-pulse">
            <img src={s} alt="gym" />
          </div>
        );
      })}
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
