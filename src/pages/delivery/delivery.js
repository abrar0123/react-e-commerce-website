import React from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Card from "../../components/common/UI/Card/card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";

const Delivery = () => {
  const cartdata = useSelector((state) => state.cart.shopCart);
  const orderData = useSelector((state) => state.cart.orderData);

  console.log("orderData_", orderData);

  const Dispatch = useDispatch();

  const placeOrder = (total) => {
    Dispatch(cartActions.placeorder({ payment: total, orderthings: cartdata }));
  };

  let subtotal = 0;
  for (let st of cartdata) {
    subtotal += st.subtotal;
  }
  const ship = 5;
  const tendiscount = subtotal / 10;
  const discount = subtotal - tendiscount;
  const myTotal = discount + ship;
  return (
    <section className="delivery">
      <Card className="deliveryCard">
        <h2> Delivery Address</h2>
        <div className="deliveryInput1">
          <input type="text" placeholder="Enter address" />
        </div>
        <div className="deliveryInput1">
          <input type="text" placeholder="Enter city" />
        </div>
        <div className="deliveryInput1">
          <input type="text" placeholder="Enter postal code" />
        </div>
        <div className="deliveryInput1">
          <input type="text" placeholder="Enter state and village" />
        </div>

        <div className="btnstyle" onClick={placeOrder.bind(this, myTotal)}>
          <Link to={"/delivery"}>Place Order</Link>
        </div>
      </Card>

      <Card className="deliveryCard">
        {orderData.payment ? (
          <>
            <h3> Sorry, you already have an order</h3>
            <h3> Please first Manage OR Delete Order </h3>
            <div className="btnstyle">
              <Link to={"/Alreadyorder"}>CheckOrder</Link>
            </div>
          </>
        ) : (
          <div>
            <h2> Order Summary</h2>

            <div className="deliveryInput1 flex spaceb">
              <p>Subtotal</p>
              <p style={{ textDecoration: " line-through" }}>
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <div className="deliveryInput1 flex spaceb">
              <p>Discount (10%)</p>
              <p>- ${tendiscount}</p>
            </div>
            <div className="deliveryInput1 flex spaceb">
              <p>New Subtotal</p>
              {/* <p> -10%</p> */}
              <p>${discount.toFixed(2)}</p>
            </div>

            <div className="deliveryInput1 flex spaceb">
              <p>Shipping Fee</p>
              <p>${ship}</p>
            </div>
            <div className="deliveryInput1 flex spaceb">
              <h3>Total </h3>
              <h2 style={{ color: "red" }}>${myTotal.toFixed(2)}</h2>
            </div>
            <div>
              <h3>Shipping Methods</h3>
            </div>
            <div>
              <input type="radio" value="HTML" /> 
              <label for="html">Cash on delivery</label>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default Delivery;
