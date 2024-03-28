import React from "react";

function Prices() {
  return (
    <div className="price-container">
      <div className="price-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-badge-sd"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.077 7.114c-1.524 0-2.263-.8-2.315-1.749h1.147c.079.466.527.809 1.234.809.739 0 1.13-.339 1.13-.83 0-.418-.3-.634-.923-.779l-.927-.215c-.932-.21-1.52-.747-1.52-1.657 0-1.098.918-1.815 2.24-1.815 1.371 0 2.162.77 2.22 1.692H6.238c-.075-.43-.466-.76-1.103-.76-.655 0-1.046.338-1.046.804 0 .36.294.598.821.712l.932.216c.971.22 1.613.685 1.613 1.691 0 1.117-.857 1.881-2.378 1.881M8.307 11V5.001h2.19c1.823 0 2.684 1.09 2.684 2.984 0 1.908-.874 3.015-2.685 3.015zm2.031-5.032h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04"
          />
        </svg>
        <h1 className="text-3xl">R290/mo</h1>
        <h2 className="text-2xl">Basic</h2>
        <ul>
          <li>Off peak access</li>
          <li>Free wifi</li>
          <li>Shower access</li>
          <li>access to 2 preselected branches</li>
          <li>1 smoothie</li>
        </ul>
      </div>
      <div className="price-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-badge-4k"
          viewBox="0 0 16 16"
        >
          <path d="M4.807 5.001C4.021 6.298 3.203 7.6 2.5 8.917v.971h2.905V11h1.112V9.888h.733V8.93h-.733V5.001zm-1.23 3.93v-.032a47 47 0 0 1 1.766-3.001h.062V8.93zm9.831-3.93h-1.306L9.835 7.687h-.057V5H8.59v6h1.187V9.075l.615-.699L12.072 11H13.5l-2.232-3.415z" />
          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
        <h1 className="text-3xl">R590/mo</h1>
        <h2 className="text-2xl">Gold</h2>
        <ul>
          <li>24/7 access</li>
          <li>Free wifi</li>
          <li>Shower access</li>
          <li>Unlimitted access within province</li>
          <li>One Gym Class</li>
          <li>4 smoothies</li>
        </ul>
      </div>
      <div className="price-box ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-badge-8k"
          viewBox="0 0 16 16"
        >
          <path d="M4.837 11.114c1.406 0 2.333-.725 2.333-1.766 0-.945-.712-1.38-1.256-1.49v-.053c.496-.15 1.02-.55 1.02-1.331 0-.914-.831-1.587-2.084-1.587-1.257 0-2.087.673-2.087 1.587 0 .773.51 1.177 1.02 1.331v.053c-.546.11-1.258.54-1.258 1.494 0 1.042.906 1.762 2.312 1.762m.013-3.643c-.545 0-.95-.356-.95-.866s.405-.852.95-.852.945.343.945.852c0 .51-.4.866-.945.866m0 2.786c-.65 0-1.142-.395-1.142-.984S4.2 8.28 4.85 8.28c.646 0 1.143.404 1.143.993s-.497.984-1.143.984M13.408 5h-1.306L9.835 7.685h-.057V5H8.59v5.998h1.187V9.075l.615-.699 1.679 2.623H13.5l-2.232-3.414z" />
          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
        <h1 className="text-3xl">R890/mo</h1>
        <h2 className="text-2xl">Premium</h2>
        <ul>
          <li>24/7 access</li>
          <li>Free wifi</li>
          <li>Shower access</li>
          <li>Unlimitted unrestricted access</li>
          <li>Personal Trainer</li>
          <li>8 smoothies</li>
        </ul>
      </div>
    </div>
  );
}

export default Prices;
