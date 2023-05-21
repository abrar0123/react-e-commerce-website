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
      <div className="mainContainer">
        <h1>Get Latest Offers and Updates </h1>
        <p className="text">Signup to Enjoy world'd best products</p>

        <div className="buttoninput">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Email Address"
          />
          <Button style={{ padding: "13px 20px" }}>Subscribe </Button>
        </div>

        <div className="iconsstyle flex spacea">
          <AiOutlineFacebook color="orange" size={35} />
          <AiOutlineTwitter color="orange" size={35} />
          <AiOutlineLinkedin color="orange" size={35} />
          <AiOutlineInstagram color="orange" size={35} />
        </div>
      </div>
    </section>
  );
}
