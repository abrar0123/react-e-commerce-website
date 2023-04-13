import React from "react";
// import "./CartPopup.css";
import "./cartpopup.css";
import Button from "../common/UI/button/Button";
import FlexRow from "../common/UI/Card/FlexRow";
import { useSelector } from "react-redux";
import Container from "../common/UI/Card/Container";
import FlexColumn from "../common/UI/Card/FlexColumn";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import Card from "../common/UI/Card/card";
import { IoIosClose } from "react-icons/io";

const Cartpop = ({ onClose }) => {
  const items = useSelector((e) => e.cart.shopCart);
  const Dispatch = useDispatch();

  let total = 0;
  for (let shop of items) {
    total += shop.subtotal;
  }
  const Subtotal = () => {
    return (
      <div>
        <FlexRow
          style={{
            justifyContent: "space-between",
            // margin: "0px 10px",
            padding: "20px 10px",
          }}
        >
          <h2>Total amount</h2>
          <p style={{ fontSize: "22px", color: "tomato", fontWeight: "bold" }}>
            {" "}
            ${total.toFixed(2)}
          </p>
        </FlexRow>
        <Button style={{ width: "96%", margin: "10px 10px" }}>
          Place Order
        </Button>
      </div>
    );
  };
  return (
    <div className="cartpop">
      <FlexRow style={{ justifyContent: "space-between", margin: "30px 10px" }}>
        <h3 style={{ textTransform: "uppercase" }}>Shopping Cart</h3>
        <Button onClick={onClose}>X</Button>
      </FlexRow>
      {items &&
        items.map((item) => {
          const itemCart = items && items.find((e) => e.id === item.id);
          return (
            <>
              <FlexRow className="cardpop">
                <Container className="imgcontainer">
                  <img src={item.url} alt="img" />
                </Container>
                <Container>
                  <p style={{ width: "280px" }}>{item.title}</p>
                  <FlexRow
                    style={{
                      margin: "10px 0px ",
                      justifyContent: "space-between",
                      // width: "100%",
                    }}
                  >
                    <FlexRow>
                      <Button
                        onClick={() =>
                          Dispatch(cartActions.removeToCart({ id: item.id }))
                        }
                      >
                        -
                      </Button>
                      <Button>{itemCart.quant}</Button>
                      <Button
                        onClick={() =>
                          Dispatch(cartActions.addToCart({ id: item.id }))
                        }
                      >
                        +
                      </Button>
                    </FlexRow>
                    <Button style={{ padding: "px 5px" }}>
                      <IoIosClose
                        color="white"
                        size={25}
                        onClick={() =>
                          Dispatch(cartActions.deleteProduct({ id: item.id }))
                        }
                      />
                    </Button>
                  </FlexRow>
                  <h4
                    style={{
                      color: "lightgrey",
                    }}
                  >
                    {item.quant} * ${item.price}{" "}
                    <span style={{ color: "tomato" }}> = ${item.subtotal}</span>
                  </h4>
                </Container>
              </FlexRow>
              {/* <hr /> */}
            </>
          );
        })}
      <Container style={{ position: "fixed", width: "30%", bottom: 10 }}>
        <Subtotal />
      </Container>
    </div>
  );
};

export default Cartpop;
