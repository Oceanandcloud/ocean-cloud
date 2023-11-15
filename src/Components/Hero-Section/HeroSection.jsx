import React, { useEffect } from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();
      tl.from(".hero-image", {opacity:0,y:100, duration: 1})
      .from('.headline-text h1', {opacity:0, duration: 0.5})
      .from('.headline-text h2', {y:50, opacity:0, duration: 0.5})
      .from('.headline .icon', {opacity:0, duration: 1})

    });
    return () => ctx.revert();

  }, [])  

  
  return (
    <>
          <div class="carousel">
        <div class="hero-image">
          <img src="./img/hero.jpg" alt="hero-image" />
        </div>
        <div class="headline">
          <div class="headline-text">
            <h1>
              Where your <br />
              <span className="orange-text">expressions</span> <br/>
              meet colors.
            </h1>
            <h2>The color you choose are a matter of personal or project preferences, we want to provide that color and share with you in that expression.</h2>
          </div>
          <Link to="/productpage">
          <div class="icon">
            <span class="material-symbols-outlined icon-arrow">
              north_east
            </span>
          </div>
           </Link>
        </div>
      </div>
    </>

  );
};

export default HeroSection;
