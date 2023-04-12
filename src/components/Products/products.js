import React, { useEffect, useState } from "react";
import "./products.css";
import Card from "../../components/common/UI/Card/card";
import Container from "../../components/common/UI/Card/Container";
import FlexRow from "../../components/common/UI/Card/FlexRow";
import ProductCatagories from "../productsCatagories/productCatagories";
// import { useSelector } from "react-redux";
// import CartModel from "../CartModel/CartModel";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../Redux/cartSlice";
import ProductsDetails from "./productsDetails";

const Products = () => {
  const [myFood, setmyFood] = useState("");
  // const userfoodCart = useSelector((state) => state.cart.foodCart);
  // const Dispatch = useDispatch();
  let cartitems = 0;
  // for (let items of userfoodCart) {
  //   cartitems += items.quant;
  // }
  // const showModel = useSelector((state) => state.cart.showModel);
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
  // myFood.length > 0 && Dispatch(cartActions.apidata(myFood));

  return (
    <section className="section">
      <FlexRow className="primaryflexContainer">
        <ProductCatagories />
        {/* <h1>Restaurants </h1> */}
      </FlexRow>
      {/* <Container>{showModel && <CartModel />}</Container> */}
      <Container className="coursecontainer">
        <ProductsDetails myFood={myFood} />
      </Container>

      <Container className="coursecontainer"></Container>
    </section>
  );
};

export default Products;
