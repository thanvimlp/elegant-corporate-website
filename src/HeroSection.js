import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="navbar-left-items">
          <a href="#">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              width={30}
            >
              <path
                className="page-icon"
                d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2"
              ></path>
            </svg>
          </a>

          <a href="#" className="nav-link">
            Pricing
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Wall of Love
          </a>
          <a href="#" className="resource-nav-link">
            Resources{" "}
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
            >
              <path
                className="down-arrow"
                d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
              ></path>
            </svg>
            <div className="resource-dropdown">
              <a href="#" className="drop-link">
                404
              </a>
              <a href="#" className="drop-link">
                Support
              </a>
            </div>
          </a>
        </div>
        <div className="navbar-right-items">
          <a href="#" className="nav-link">
            Sign in
          </a>
          <a href="#" className="request-nav-link">
            Request Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#1f1f1f"
            >
              <path
                className="right-arrow"
                d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-heading">Create stunning web experiences</h1>
          <p className="hero-para">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="hero-left-anchor">
            <a href="#" className="hero-request-nav-link">
              Request Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#1f1f1f"
              >
                <path
                  className="hero-right-arrow"
                  d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
                />
              </svg>
            </a>
            <a href="#" className="hero-product-nav-link">
              Explore Product&nbsp;
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="background-border"></div>
          <img className="hero-img" src="/images/hero-img.jpeg"></img>
          <button className="overlay-button">
            <svg
              class="c0jld cheux cbao0 cq71k cuz7k cevzp"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="play"
                d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
