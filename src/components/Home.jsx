import React from "react";
import H1 from "../images/Home/H1.jpg";
import H2 from "../images/Home/H2.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={H1}></img>
      </div>
      <div className="home-content writing">
        <h1 className="text-2xl italic font-bold">The Dawn of NEO-AGE</h1>
        <p>Be part of the movement and engage in the future of training.</p>
      </div>
      <div className="home-content writing">
        <h1 className="text-3xl italic font-bold text-[#770707]">NEO-GYM !</h1>
        <p>
          is tailored to accommodate everyone and all their needs, and it is
          here to takeover, avoid being left out and be part of this{" "}
          <span className="text-xl text-[#770707]">MOVEMENT</span>.
        </p>
      </div>
      <div className="home-content">
        <img src={H2}></img>
      </div>
    </div>
  );
}

export default Home;
