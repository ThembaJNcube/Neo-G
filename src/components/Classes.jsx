import React from "react";
import lessons from "./lessons";

function Classes() {
  return (
    <div className="classes-container">
      {lessons.map((s) => {
        return (
          <div className="class-box">
            <div className="class-image">
              <img src={s.image} alt={s.alt} key={s.id} />
            </div>
            <div className="class-info">
              <h1 className="font-bold text-[#110808] animate-pulse">
                {s.name}
              </h1>
              <p>{s.message}</p>
              <p>{s.emoji}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Classes;
