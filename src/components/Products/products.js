import React, { useEffect, useState } from "react";
import "./products.css";
import Card from "../../components/common/UI/Card/card";
import Container from "../../components/common/UI/Card/Container";
import FlexRow from "../../components/common/UI/Card/FlexRow";
import ProductCatagories from "../productsCatagories/productCatagories";
import { useSelector } from "react-redux";
// import CartModel from "../CartModel/CartModel";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import ProductsDetails from "./productsDetails";
import { shopActions } from "../../Redux/shopapiSlice";
import { ScaleLoader } from "react-spinners";

const Products = () => {
  const [myFood, setmyFood] = useState([]);
  const [isLoader, setisLoader] = useState(false);
  const usershopCart = useSelector((state) => state.cart.shopCart);
  // const shopCatagories = useSelector((item) => item.shop.shopCatagories);

  const Dispatch = useDispatch();

  let cartitems = 0;
  for (let items of usershopCart) {
    cartitems += items.quant;
  }
  // const showModel = useSelector((state) => state.cart.showModel);
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
  const cat = "Popular Products";

  return (
    <section className="section">
      <FlexRow className="primaryflexContainer">
        {/* <ProductCatagories /> */}
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
          {cat}
        </h2>
        {isLoader && (
          <div style={{ paddingLeft: "350px" }}>
            <ScaleLoader size={35} color="blue" />
          </div>
        )}
      </Container>
      {/* <Container>{showModel && <CartModel />}</Container> */}
      {/* <ProductsDetails shopCatagories={shopCatagories} /> */}
      <ProductsDetails shopCatagories={myFood} />

      <Container className="coursecontainer"></Container>
    </section>
  );
};

export default Products;
