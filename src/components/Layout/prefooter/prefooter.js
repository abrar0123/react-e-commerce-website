import React from "react";
import "./prefooter.css";
import FlexColumn from "../../common/UI/Card/FlexColumn";
import Container from "../../common/UI/Card/Container";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import FlexRow from "../../common/UI/Card/FlexRow";
import Button from "../../common/UI/button/Button";

export default function prefooter() {
  return (
    <section className="prefooter">
      <FlexColumn
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>News Letter</h3>
        <h1>Signup for Latest Offers and Updates </h1>
        <Container style={{ margin: "15px 0px " }}>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Email Address"
          />
          <Button>Subscribe </Button>
        </Container>
        <p>will be used in accordance with our privacy policy </p>
        <FlexRow
          style={{
            margin: "10px 0px",
            width: "150px",
            justifyContent: "space-between",
          }}
        >
          <AiOutlineFacebook color="blue" size={25} />
          <AiOutlineTwitter color="blue" size={25} />
          <AiOutlineLinkedin color="blue" size={25} />
          <AiOutlineInstagram color="blue" size={25} />
        </FlexRow>
      </FlexColumn>
    </section>
  );
}
