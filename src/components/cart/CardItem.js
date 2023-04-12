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

export default function CardItem() {
  const shopCart = useSelector((state) => state.cart.shopCart);

  const Dispatch = useDispatch();

  console.log("shopCart__", shopCart);
  return (
    <>
      {shopCart &&
        shopCart.map((item) => {
          let find = shopCart.find((e) => e.id === item.id);
          return (
            <Card className="cartItem boxShadow-sm">
              <span className="removeCartItem">
                <IoIosClose
                  color="black"
                  size={25}
                  onClick={() =>
                    Dispatch(cartActions.deleteProduct({ id: item.id }))
                  }
                />
              </span>
              <div className="cartItemImg">
                <img src={item.url} alt="img" />
              </div>
              <div className="cartItemDetails">
                <h3 className="cartItemHeading">{item.title}</h3>
                <div className="cartItemInfo">
                  <div className="cartItemQuantity">
                    US${item.price}x {item.quant}
                  </div>
                  <div className="cartItemPrice">US${item.subtotal}</div>
                </div>
                <div className="cartItemCounter">
                  <button
                    className="decrement"
                    onClick={() =>
                      Dispatch(cartActions.removeToCart({ id: item.id }))
                    }
                  >
                    <IoIosRemove color="white" size={25} />
                  </button>
                  <span>{find.quant}</span>
                  <button
                    className="increment"
                    onClick={() =>
                      Dispatch(cartActions.addToCart({ id: item.id }))
                    }
                  >
                    <IoIosAdd color="white" size={25} />
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
    </>
  );
}
