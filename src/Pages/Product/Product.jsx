import React, {useEffect} from "react";
import "./product.css";
import ProductCard from "../../Components/Product-Card/ProductCard";
import { useProductContext } from "../../Contexts/ProductContext";
import ProductData from "../../assets/ProductData.js";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const Product = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();
      tl.from('.product-section', {opacity:0, y:50, duration:1})

    });
    return () => ctx.revert();

  }, [])  
  const { products } = useProductContext();
  return (
    <>
        <div class="product-section">
          {ProductData.map((item, index) => (
            <ProductCard item={item} key={index} addToCartBtn={true} />
          ))}
          </div>
    </>
  );
};

export default Product;
