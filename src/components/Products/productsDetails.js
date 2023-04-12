import React from "react";
import "./products.css";
import Card from "../../components/common/UI/Card/card";
import Container from "../../components/common/UI/Card/Container";
import FlexRow from "../../components/common/UI/Card/FlexRow";
import Button from "../../components/common/UI/button/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";

const ProductsDetails = ({ myFood }) => {
  const foodCart = useSelector((state) => state.cart.shopCart);

  const Dispatch = useDispatch();

  const addToCartHandler = (id, title, url, price) => {
    Dispatch(
      cartActions.addToCart({ id: id, title, url: url, quant: 1, price: price })
    );
  };

  const removeToCartHandler = (id) => {
    Dispatch(cartActions.removeToCart({ id: id }));
  };

  return (
    <React.Fragment>
      {myFood &&
        myFood.map((item) => {
          const imageUrl = item.image;
          const price = item.price;
          const foodCartitems =
            foodCart && foodCart.find((e) => e.id === item.id);

          return (
            <Card className="coursecCard">
              <Container className="imgContainer">
                <img src={imageUrl} alt="pic" />
              </Container>
              <Container className="titlecontainer">
                <h2>{item.title}</h2>
              </Container>
              <FlexRow className="primaryflex">
                <Container className="titlecontainer">
                  <p>Items : {item.rating.count}</p>
                </Container>
                <Container className="titlecontainer">
                  <p>Price: ${price}</p>
                </Container>
              </FlexRow>
              <Container className="titlecontainer">
                <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  Catagory: {item.category}
                </p>
              </Container>
              <Container className="titlecontainer">
                <FlexRow className="primaryflex1">
                  <Button
                    style={{
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                    onClick={removeToCartHandler.bind(this, item.id)}
                  >
                    -
                  </Button>
                  <p className="p1">
                    {foodCartitems ? foodCartitems.quant : 0}
                  </p>
                  <Button
                    style={{
                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                    onClick={addToCartHandler.bind(
                      this,
                      item.id,
                      item.title,
                      imageUrl,
                      price
                    )}
                  >
                    +
                  </Button>
                </FlexRow>
              </Container>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export default ProductsDetails;
