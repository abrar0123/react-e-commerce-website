import React from "react";
// import "./CartPopup.css";
import "./cartpopup.css";
import Button from "../common/UI/button/Button";
import FlexRow from "../common/UI/Card/FlexRow";
import { useSelector } from "react-redux";
import Container from "../common/UI/Card/Container";
import FlexColumn from "../common/UI/Card/FlexColumn";

const Cartpop = ({ onClose }) => {
  const items = useSelector((e) => e.cart.shopCart);
  return (
    <div className="cartpop">
      <FlexRow style={{ justifyContent: "space-between", margin: "30px 10px" }}>
        <h3 style={{ textTransform: "uppercase" }}>Shopping Cart</h3>
        <Button onClick={onClose}>X</Button>
      </FlexRow>
      {items &&
        items.map((item) => {
          return (
            <>
              <FlexRow className="cardpop">
                <Container className="imgcontainer">
                  <img src={item.url} alt="img" />
                </Container>
                <FlexColumn>
                  <p style={{ width: "280px" }}>{item.title}</p>
                  <FlexRow>
                    <Button>-</Button>
                    <Button>10</Button>
                    <Button>+</Button>
                  </FlexRow>
                  <h4 style={{ color: "lightgrey" }}>
                    {item.quant} * ${item.price}{" "}
                    <span style={{ color: "blue" }}> = ${item.subtotal}</span>
                  </h4>
                </FlexColumn>
              </FlexRow>
              <hr />
            </>
          );
        })}
    </div>
  );
};

export default Cartpop;
