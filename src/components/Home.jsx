import React from "react";
import H1 from "../images/Home/H1.jpg";
import H2 from "../images/Home/H2.jpg";
import H3 from "../images/Home/H3.jpg";

function Home() {
  return (
    <div className="section-container">
      <div className="home-content">
        <img
          src={H1}
          alt="dumbell"
          className="hover:animate-pulse"
          loading="lazy"
        ></img>
      </div>
      <div className="home-content writing">
        <h1 className="text-2xl italic font-bold">
          This is the Dawn of{" "}
          <span className="text-3xl italic font-bold text-[#770707] animate-pulse">
            {" "}
            NEO-AGE
          </span>
        </h1>
        <p>
          Be part of the movement and engage in the future of training.{"  "}{" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum culpa
          dicta ducimus amet delectus cum, vel dolore veniam corrupti doloribus
          provident, vitae aliquam similique ex.
        </p>
      </div>
      <div className="home-content">
        <img
          src={H3}
          alt="dumbell"
          className="hover:animate-pulse"
          loading="lazy"
        ></img>
      </div>
      <div className="home-content writing">
        <h1 className="text-3xl italic font-bold text-[#770707]">NEO-GYM !</h1>
        <p>
          is tailored to accommodate everyone and all their needs, and it is
          here to takeover, avoid being left out and be part of this{"  "}
          <span className="text-xl text-[#770707]"> MOVEMENT</span>
          {"  "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          est quos non amet iure rem consectetur assumenda consequuntur vel
          autem?.
        </p>
      </div>
      <div className="home-content">
        <img src={H2} alt="gym" loading="lazy" />
      </div>
      <div className="next">
        <button className="btn">read more ...</button>
      </div>
    </div>
  );
}

export default Home;
