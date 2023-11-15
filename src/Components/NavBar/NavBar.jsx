import React, {useEffect, useState} from "react";
import "./navbar.css";
import {Link, NavLink} from "react-router-dom";
import { useCartContext } from "../../Contexts/CartContext";
import gsap from "gsap";


const NavBar = ({logo=true,navItem=true}) => {

  useEffect(() => {
    const animationPlayed = sessionStorage.getItem("navbarAnimationPlayed");

    if (!animationPlayed) {
      const ctx = gsap.context(() => {
        gsap.from('.website_nav', { y: -100, duration: 1 });
      });

      sessionStorage.setItem("navbarAnimationPlayed", "true");
      
      return () => {
        ctx.revert();

      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', sessionStorage.clear());
  
    return () => {
      window.removeEventListener('beforeunload', sessionStorage.clear());
    }
  }, [])
  
  


  
  const {total_item} = useCartContext();

  return (
    <nav className="nav_conatiner">
      <div className="website_nav">
        {
          logo && (<div className="logo_sec">
          <span>
            <img src="/img/logo.png" alt="logo" className="logo_img" />
          </span>
        </div>)
        }        
        {
          navItem && (<div className="nav_items">
          <ul className="nav_items_ul">
          <NavLink to="/" className="nav_item">Home</NavLink>
          <NavLink to="/productpage" className="nav_item">Products</NavLink>
           <NavLink to="/contact" className="nav_item">Contact</NavLink>
            <li className="nav_item">
              <Link to="/cart">
                <button
                  type="button"
                  className="qute_btn btn"
                  id="get_quote_btn"
                >
                  Order Now
                 {
                   total_item !== 0 ? <span className="num_cir">{total_item}</span>: <span></span>
                 } 
                </button>
              </Link>
              
            </li>
          </ul>
        </div>)
        }
      </div>
      <div className="mobile_nav">
        <div className="nav_icons">
          <NavLink to="/">
            <i className="ri-home-line icon"></i>
          </NavLink>
          <NavLink to="/contact">
            <i className="ri-phone-line icon"></i>
          </NavLink>
          <NavLink to="/productpage">
            <i class="ri-store-3-line icon"></i>
          </NavLink>
          <NavLink to="/cart">
            <div className="cart_div">
            <i className="ri-shopping-cart-line icon cart_icon">
            </i>
            {total_item !== 0 ? (
                      <span className="num_cir_mob">{total_item}</span>
                    ) : (
                      <span></span>
                    )}
           </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
