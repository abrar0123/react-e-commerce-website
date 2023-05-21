import React, { useEffect, useState } from "react";
import "./products.css";

import Container from "../common/UI/Card/Container";
import FlexRow from "../common/UI/Card/FlexRow";
import ProductCatagories from "../productsCatagories/productCatagories";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import ProductsDetails from "./productsDetails";
import { shopActions } from "../../Redux/shopapiSlice";
import { ScaleLoader } from "react-spinners";

const Productscatdisplay = () => {
  const [myFood, setmyFood] = useState("");
  const [isLoader, setisLoader] = useState(false);
  const usershopCart = useSelector((state) => state.cart.shopCart);
  const shopCatagories = useSelector((item) => item.shop.shopCatagories);

  const Dispatch = useDispatch();

  let cartitems = 0;
  for (let items of usershopCart) {
    cartitems += items.quant;
  }
  // const searchedProducts = useSelector((state) => state.cart.searchedProducts);

  useEffect(() => {
    const myFoodData = async () => {
      try {
        setisLoader(true);
        const res = await fetch("https://fakestoreapi.com/products/");

        const data = await res.json();
        setmyFood(data);
        // console.log("Apidata__", data.categories);
        setisLoader(false);
      } catch (error) {
        console.log("Api Data Error ", error);
      }
    };
    myFoodData();
  }, []);

  myFood.length > 0 && Dispatch(shopActions.shopapi(myFood));
  const cat = "ALL Products";

  return (
    <section className="section">
      <FlexRow className="primaryflexContainer">
        <ProductCatagories />
      </FlexRow>
      <Container style={{ marginBottom: "35px" }}>
        <h2
          style={{
            textTransform: "capitalize",
            // marginBottom: "25px",
            display: "inline",
            borderBottom: "3px solid tomato",
            paddingBottom: "6px",
          }}
        >
          {shopCatagories.length > 0 && shopCatagories.length < 10
            ? shopCatagories[0].category
            : cat}
        </h2>
      </Container>
      {isLoader && (
        <div style={{ paddingLeft: "350px" }}>
          <ScaleLoader size={35} color="blue" />
        </div>
      )}
      <Container className="coursecontainer">
        <ProductsDetails shopCatagories={shopCatagories} />
      </Container>

    </section>
  );
};

export default Productscatdisplay;
