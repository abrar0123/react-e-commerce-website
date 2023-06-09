import React from "react";
import "./postheader.css";
import Button from "../../common/UI/button/Button";
import { AiOutlineSearch } from "react-icons/ai";

const Postheader = () => {
  return (
    <section className="flex1 spacea sectionpost">
      <p className="text1">Welcome here </p>
      <div className="flex1">
        <div className="inputdetils flex1">
          <AiOutlineSearch
            size={22}
            color="grey"
            style={{ marginLeft: "10px" }}
          />
          <input type="text" placeholder="Search for products" />
          <Button style={{ padding: "10px 20px" }}>search </Button>
        </div>
      </div>
    </section>
  );
};

export default Postheader;
