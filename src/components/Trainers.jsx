import React, { useState } from "react";
import coach from "./coach";

export default function Trainers() {
  const [index, setIndex] = useState(0);

  return (
    <div className="Trainers-container">
      <div className="dispay-box">
        <img
          src={coach[index].src}
          alt={coach[index].alt}
          id={coach[index].id}
        />
        <div className="info ">
          <h1>
            {coach[index].message}
            {"              ......."}

            <span className="text-[#b91010] font-bold text-2xl max-md:text-xl">
              {coach[index].name}
            </span>
          </h1>
        </div>
      </div>
      <div className="side-pane ">
        <button
          className="coach bg-[#419212]"
          value={0}
          onClick={(e) => {
            setIndex(e.target.value);
            console.log(index);
          }}
        >
          {" "}
          John{" "}
        </button>
        <button
          className="coach bg-[#341292]"
          value={1}
          onClick={(e) => {
            setIndex(e.target.value);
            console.log(index);
          }}
        >
          {" "}
          Kate{" "}
        </button>
        <button
          className="coach bg-[#92124e]"
          value={2}
          onClick={(e) => {
            setIndex(e.target.value);
            console.log(index);
          }}
        >
          {" "}
          Fred{" "}
        </button>
        <button
          className="coach bg-[#810881]"
          value={3}
          onClick={(e) => {
            setIndex(e.target.value);
            console.log(index);
          }}
        >
          {" "}
          Dave{" "}
        </button>
      </div>
    </div>
  );
}
