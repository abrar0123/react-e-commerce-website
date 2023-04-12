import React from "react";
import Card from "../common/UI/Card/card";
import Container from "../common/UI/Card/Container";
import "./pcatagories.css";
import FlexColumn from "../common/UI/Card/FlexColumn";

export default function productCatagories() {
  const catagories = [
    {
      id: 1,
      name: "men's clothing",
      url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },

    {
      id: 1,
      name: "jewelery",
      url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },

    {
      id: 1,
      name: "electronics",
      url: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },

    {
      id: 1,
      name: "women's clothing",
      url: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
  ];

  const catagoriesSelect = () => {
    console.log("catagoriesSelect");
  };
  return (
    <React.Fragment>
      {catagories.map((item) => {
        return (
          <Card className="productcatagoriesCard">
            <FlexColumn style={{ alignItems: "center" }}>
              <Container className="imgContainer">
                <img src={item.url} alt="img" onClick={catagoriesSelect} />
              </Container>
              <p>{item.name}</p>
            </FlexColumn>
          </Card>
        );
      })}
    </React.Fragment>
  );
}
