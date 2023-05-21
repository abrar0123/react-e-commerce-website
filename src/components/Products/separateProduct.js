import React from "react";
import "./products.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { cartActions } from "../../Redux/cartSlice";

const SeparateProduct = () => {
  const shopapi = useSelector((state) => state.shop.shopapi);
  const cartapi = useSelector((state) => state.cart.shopCart);

  console.log("cartapi__", cartapi);
  const Dispatch = useDispatch();

  const addToCart = (id, title, url, price) => {
    Dispatch(
      cartActions.addToCart({
        id: id,
        title,
        url: url,
        quant: 1,
        price: price,
        subtotal: price * 1,
      })
    );
  };

  const removeToCartHandler = (id) => {
    Dispatch(cartActions.removeToCart({ id: id }));
  };

  const params = useParams();
  const pid = params.pid * 1;
  const myProduct = shopapi.find((item) => item.id === pid);
  console.log("myProduct__", myProduct);
  //   get quant

  const myProduct2 = cartapi.find((item) => item.id === pid);

  // console.log("myProduct2__", myProduct2);

  return (
    <div>
      <div className="separateproduct">
        <div className="myimgContaineer">
          <img src={myProduct.image} alt="" />
        </div>
        <div className="secondaryproductstyle">
          <h2>{myProduct.title}</h2>
          <h2>
            Price of Product:{" "}
            <span style={{ marginLeft: "30px" }}> ${myProduct.price} </span>{" "}
          </h2>
          <p className="sptext">{myProduct.description}</p>
          <div className="flex">
            <p>Quntity</p>
            <div className="cartbutton flex">
              <div
                className="box1"
                onClick={removeToCartHandler.bind(this, myProduct.id)}
              >
                -
              </div>
              <p className="box2">{myProduct2 ? myProduct2.quant : 0}</p>
              <div
                className="box1"
                onClick={addToCart.bind(
                  this,
                  myProduct.id,
                  myProduct.title,
                  myProduct.image,
                  myProduct.price
                )}
              >
                +
              </div>
            </div>
          </div>
          <div className="flex">
            <StarRatings
              rating={myProduct.rating.rate}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              numberOfStars={5}
              starDimension="45px"
              // starSpacing="10px"
            />
            <h3
              style={{
                marginLeft: "40px",
                fontSize: "25px",
                color: "goldenrod",
              }}
            >
              {myProduct.rating.rate}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateProduct;
