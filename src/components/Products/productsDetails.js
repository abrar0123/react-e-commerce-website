import React from "react";
import "./products.css";
import Card from "../../components/common/UI/Card/card";
import Container from "../../components/common/UI/Card/Container";
import FlexRow from "../../components/common/UI/Card/FlexRow";
import Button from "../../components/common/UI/button/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";

const ProductsDetails = ({ shopCatagories }) => {
  const shopCart = useSelector((state) => state.cart.shopCart);

  const Dispatch = useDispatch();

  const addToCartHandler = (id, title, url, price) => {
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

  return (
    <Card className="coursecontainer">
      {shopCatagories &&
        shopCatagories.map((item) => {
          const imageUrl = item.image;
          const price = item.price;
          const foodCartitems =
            shopCart && shopCart.find((e) => e.id === item.id);

          return (
            <div className="coursecCard">
              <Link to={`/Products/${item.id}`}>
                <Container className="imgContainer">
                  <img src={imageUrl} alt="pic" />
                </Container>
              </Link>

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
            </div>
          );
        })}
    </Card>
  );
};

export default ProductsDetails;
