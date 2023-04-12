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

const Productscatdisplay = () => {
  const [myFood, setmyFood] = useState("");
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
        const res = await fetch("https://fakestoreapi.com/products/");

        const data = await res.json();
        setmyFood(data);
        // console.log("Apidata__", data.categories);
      } catch (error) {
        console.log("Api Data Error ", error);
      }
    };
    myFoodData();
  }, []);

  myFood.length > 0 && Dispatch(shopActions.shopapi(myFood));
  const cat = "Popular Products";

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
      <Container className="coursecontainer">
        <ProductsDetails shopCatagories={shopCatagories} />
      </Container>

      <Container className="coursecontainer"></Container>
    </section>
  );
};

export default Productscatdisplay;
