import React, { useState } from "react";
import "./header.css";
import { IoIosSearch, IoIosCart, IoIosHeartEmpty } from "react-icons/io";
import Card from "../../common/UI/Card/card";
import Container from "../../common/UI/Card/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../common/UI/button/Button";
import CartPopup from "../../cart/cartpop";
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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/categories">categories</Link>
              </li>
              {/* <Button onClick={handleCartOpen}></Button> */}
            </ul>
          </nav>
          <Container>
            <h1>Sephora Store</h1>
          </Container>

          <nav>
            <ul>
              {/* course */}
              <li>
                <a href="#">
                  <IoIosSearch color="white" size={25} />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoIosHeartEmpty
                    color="white"
                    size={25}
                    onClick={handleCartOpen}
                  />
                </a>
              </li>
              <li>
                {/* <a href="#">
              </a> */}
                <Link to="/Cart">
                  <IoIosCart color="white" size={25} />
                  <span
                    style={{
                      background: "tomato",
                      borderRadius: "50px",
                      padding: "0px 5px",
                      position: "relative",
                      bottom: "10px",
                      // right: "10px",
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
      {cartOpen && <CartPopup onClose={handleCartClose} />}
    </>
  );
}
