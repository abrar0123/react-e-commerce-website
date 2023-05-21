import React from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Card from "../../components/common/UI/Card/card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";

const Alreadyorder = () => {
  const orderData = useSelector((state) => state.cart.orderData);

  console.log("orderData_", orderData);
  const Dispatch = useDispatch();

  const deleteplaceorder = () => {
    Dispatch(cartActions.deleteplaceorder());
  };
  return (
    <section className="delivery">
      <Card className="deliveryCard">
        <h2> Your Current Order</h2>
        <div className="deliveryInput1 flex spaceb">
          <p>Total Order Amount </p>
          <p style={{}}>${orderData.payment?.toFixed(2)}</p>
        </div>

        <div className="deliveryInput1 flex spaceb">
          <p>Total Things that you Order</p>
          <p>{orderData.orderthings?.length}</p>
        </div>
        <div className="deliveryInput1 flex spaceb">
          <h3>Total </h3>
          <h2 style={{ color: "red" }}>${orderData.payment?.toFixed(2)}</h2>
        </div>
        <div>
          <h3>Shipping Methods</h3>
        </div>
        <div>
          <input type="radio" value="HTML" /> 
          <label for="html">Cash on delivery</label>
        </div>
        <div className="alraedyplacedbtn">
          <a href="#">Proceed More </a>
        </div>
        <div className="alraedyplacedbtn" onClick={deleteplaceorder}>
          <Link to={"/Alreadyorder"}>Want to delete Order</Link>
        </div>
      </Card>
    </section>
  );
};

export default Alreadyorder;
