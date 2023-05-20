import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Card from "../common/UI/Card/card";
import "./CartItem.css";
import { useSelector } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import Container from "../common/UI/Card/Container";

export default function CardItem() {
  const shopCart = useSelector((state) => state.cart.shopCart);

  const Dispatch = useDispatch();

  console.log("shopCart__", shopCart);

  let myTotal = 0;
  for (let t of shopCart) {
    myTotal += t.subtotal;
  }

  return (
    <div className="cartItemMain">
      {shopCart &&
        shopCart.map((item) => {
          let find = shopCart.find((e) => e.id === item.id);

          return (
            <Card className="cartItem boxShadow-sm">
              <span className="removeCartItem">
                <IoIosClose
                  className="crossicon"
                  size={25}
                  onClick={() =>
                    Dispatch(cartActions.deleteProduct({ id: item.id }))
                  }
                />
              </span>
              <Container className="cartItemImg">
                <img src={item.url} alt="img" />
              </Container>
              <div className="cartItemDetails">
                <h3 className="cartItemHeading" style={{}}>
                  {item.title}
                </h3>
              </div>

              <div className="cartItemDetails">
                {/* <div className="cartItemInfo">
                    <div className="cartItemQuantity">
                      US${item.price}x {item.quant}
                    </div>
                  </div> */}

                <div className="cartItemCounter">
                  <button
                    className="decrement"
                    onClick={() =>
                      Dispatch(cartActions.removeToCart({ id: item.id }))
                    }
                  >
                    <IoIosRemove color="black" size={25} />
                  </button>
                  <span>{find.quant}</span>
                  <button
                    className="increment"
                    onClick={() =>
                      Dispatch(cartActions.addToCart({ id: item.id }))
                    }
                  >
                    <IoIosAdd color="black" size={25} />
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className="cartItemDetails">
                {/* <h3 className="cartItemHeading">Price</h3> */}
                <div className="cartItemPrice">
                  US${item?.subtotal?.toFixed(2)}
                </div>
              </div>
            </Card>
          );
        })}
      <div className="totalHeading">
        <h3>
          {" "}
          <span style={{ fontWeight: "400", fontSize: "23px" }}>
            Total Bill :{"     \t"}
          </span>{" "}
          ${myTotal}
        </h3>
      </div>
      <div className="hrstyle">
        <hr style={{ fontWeight: "bold" }} />
      </div>
      <div className="buttonstyle flex spacea">
        <button className="button1">Continue to Shopping</button>

        <button className="button2">checkout</button>
      </div>
    </div>
  );
}
