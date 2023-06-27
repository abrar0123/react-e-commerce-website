import React, { useState } from "react";
import "./header.css";
import { IoIosSearch, IoIosCart, IoIosBody } from "react-icons/io";
import Card from "../../common/UI/Card/card";
import Container from "../../common/UI/Card/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../common/UI/button/Button";
import CartPopup from "../../cart/cartpop";
import Signup from "../../../sections/auth/Signup";

export default function Header() {
  const shopCart = useSelector((state) => state.cart.shopCart);

  let cart = 0;
  for (let items of shopCart) {
    cart += items.quant;
  }
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };
  return (
    <>
      <header>
        <Card className="headercontainer">
          <Container>
            <h1>
              <Link to="/">JDK Store</Link>
            </h1>
          </Container>

          <Card className="navBar">
            <ul className="navList flex spaceb">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/Products">Products</Link>
              </li>
              <li className="navItem">
                <Link to="/categories">categories</Link>
              </li>
              <li className="navItem">
                <Link to="/login">Login</Link>
              </li>
              <li className="navItem">
                <Link to={"Signup"}>Signup</Link>
              </li>
            </ul>
          </Card>

          <nav>
            <ul>
              <li>
                <Link to={"User"}>
                  <IoIosBody color="black" size={25} />
                </Link>
              </li>
              <li>
                <Link to="/Cart">
                  <IoIosCart color="black" size={25} className="iconstyle" />
                  <span
                    style={{
                      background: "tomato",
                      color: "white",
                      borderRadius: "25px",
                      padding: "2px 5px",
                      fontSize: "12px",
                      position: "relative",
                      bottom: "18px",

                      right: "2px",
                    }}
                  >
                    {cart}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </Card>
      </header>
      {/* {cartOpen && <CartPopup onClose={handleCartClose} />} */}
    </>
  );
}
