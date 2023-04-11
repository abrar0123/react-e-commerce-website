import React from "react";
import pic from "../../../assets/Image2/welcome.png";
import Button from "../../common/UI/button/Button";
import Container from "../../common/UI/Card/Container";
import FlexColumn from "../../common/UI/Card/FlexColumn";
import FlexRow from "../../common/UI/Card/FlexRow";

import "./headersection.css";

export default function headerSection() {
  return (
    <section className="headsectionCard">
      <FlexRow className="headerMainContainer">
        <FlexColumn
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            height: "50vh",
          }}
        >
          <h1>Sephora Sales </h1>
          <p style={{ justifyContent: "space-between" }}>
            Welcme to our Sephora Sales Store, Please visit our store and pick
            your favourite things, add to cart , add them into favourite section
            and apply vouchers and place order at any time and enjoy things at
            your home
          </p>
          <FlexRow>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                marginRight: "20px",
              }}
            >
              Read More
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid white",
              }}
            >
              Shop Now
            </Button>
          </FlexRow>
        </FlexColumn>
        <Container className="imageContainer">
          <img src={pic} alt="" />
        </Container>
      </FlexRow>
    </section>
  );
}
