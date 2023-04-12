import React, { useState } from "react";
import Card from "../common/UI/Card/card";
import Container from "../common/UI/Card/Container";
import "./pcatagories.css";
import FlexColumn from "../common/UI/Card/FlexColumn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import option from "../../assets/Icons/options.png";
import { shopActions } from "../../Redux/shopapiSlice";

const catagories = [
  {
    id: 0,
    name: "All Catagories",
    // name:["men's clothing", "jewelery", "electronics", "women's clothing"],
    url: option,
  },
  {
    id: 1,
    name: "women's clothing",
    url: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 2,
    name: "jewelery",
    url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },

  {
    id: 3,
    name: "electronics",
    url: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },

  {
    id: 4,
    name: "men's clothing",
    url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
];

export default function ProductCatagories() {
  const [selectcat, setselectcat] = useState(0);

  const shopapi = useSelector((item) => item.shop.shopapi);

  const Dispatch = useDispatch();

  shopapi.length > 0 &&
    selectcat === 0 &&
    Dispatch(shopActions.shopCatagories(shopapi));

  const catagoriesSelect = (id) => {
    let newCatagory;

    setselectcat(id);
    let findIndex = catagories.findIndex((e) => e.id === id);
    if (findIndex === 0) {
      newCatagory = shopapi;
    } else {
      newCatagory = shopapi.filter(
        (item) => item.category.toLowerCase() === catagories[id].name
      );
    }

    newCatagory.length > 0 && Dispatch(shopActions.shopCatagories(newCatagory));
  };

  return (
    <React.Fragment>
      {catagories.map((item, i) => {
        return (
          <Card
            className="productcatagoriesCard"
            style={{
              background:
                item.id === selectcat && "linear-gradient(to right, red, blue)",
            }}
          >
            <FlexColumn style={{ alignItems: "center" }}>
              <Container className="imgContainer">
                <img
                  src={item.url}
                  alt="img"
                  onClick={catagoriesSelect.bind(this, i)}
                />
              </Container>
              <p
                style={{
                  color: item.id === selectcat && "white",
                }}
              >
                {item.name}
              </p>
            </FlexColumn>
          </Card>
        );
      })}
    </React.Fragment>
  );
}
