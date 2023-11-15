import React from "react";
export function HeroProductCard(props) {
  return <div class="product-card card1">
            <div class="product-image">
              <img src={props.image} />
            </div>
            <div class="product-details">
              <h3>{props.category}</h3>
              <h2>{props.name}</h2>
              <p>
                {props.description}
              </p>
            </div>
            <div class="card-buttons">
              <div class="btn-primary">Explore Now</div>
            </div>
          </div>;
}
  