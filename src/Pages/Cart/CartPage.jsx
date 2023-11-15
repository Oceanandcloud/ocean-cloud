import React, { useEffect, useState } from "react";
import "./cart.css";
import { useCartContext } from "../../Contexts/CartContext";
import CartProduct from "../../Components/CartProducts/CartProduct";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  let { cart, total_item, total_price, deleteCart } = useCartContext();
  const navigate = useNavigate();
  console.log("cart", cart);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    products: [],
    total_price,
  });

  const handleInp = (e) => {
    const { value, name } = e.target;

    setData(() => {
      return {
        ...data,
        [name]: value,
        products: cart,
        total_price: total_price,
      };
    });
  };

  const handleCheckout = async (e) => {

    const url =
      "https://api.telegram.org/bot6961038399:AAG-78iti9JYemKErwB0JWALU1qC9iyw9f0/sendMessage";
    const { data: res } = await axios.post(url, {
      chat_id: 1571481337,
      text: `Customer Details\n\nName: ${data.name},\nPhone: ${
        data.phone
      },\nEmail: ${data.email},\nAddress: ${
        data.address
      },\n\nProducts Details: {${cart.map(
        (e) => `\n${e.product_name}(${e.quantity})`
      )}\n} `,
    });
    if (res) {
      deleteCart();
    }

    window.location.href = "https://api.whatsapp.com/send?phone=2347041826946&text=Hey%20Ocean%20and%20Cloud%2C%20I%20want%20to%20order%20some%20items%20from%20you...%20Please%20drop%20me%20a%20reply%20here"

  };

  return (
    <section className="checkout_section">
      <div className="checkout_left">
        <div class="checkout_left_nav">
        </div>
        <div className="checkout_left_top">
          <span>
            <h2>Confirm your order</h2>
            <h4>{total_item} Items</h4>
          </span>
        </div>
        {total_item == 0 ? (
          <div className="no_item_cart_div">
            <h1 className="no_item_txt">No Item in Cart</h1>
            <h4 className="no_item_sec_txt">
              Please Add Product from Product Page
            </h4>
            <Link to="/productpage">
              {" "}
              <button className="btn no_item_btn">Products</button>
            </Link>
          </div>
        ) : (
          <div className="checkout_product_list">
            {cart.map((item) => (
              <CartProduct item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">
        <div className="checkout_right_nav">
        </div>
        <div className="checkout_form">
          <h3 className="form_title">Your Information</h3>
          <div className="form_inps">
            <div className="form_inp">
              <label for="name" className="form_label">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="single_inp"
                onChange={handleInp}
              />
            </div>
            <div className="form_inp">
              <label for="name" className="form_label">
                Phone
              </label>
              <input
                type="text"
                id="name"
                name="phone"
                className="single_inp"
                onChange={handleInp}
              />
            </div>
            <div className="form_inp">
              <label for="name" className="form_label">
                Email Id
              </label>
              <input
                type="text"
                id="name"
                name="email"
                className="single_inp"
                onChange={handleInp}
              />
            </div>
            <div className="form_inp">
              <label for="address" className="form_label">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                rows="2"
                className="single_textarea_inp"
                onChange={handleInp}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="checkout_right_btn_div">
          <button
            type="button"
            className="checkout_right_btn"
            onClick={handleCheckout}
          >
            PLACE YOUR ORDER
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
