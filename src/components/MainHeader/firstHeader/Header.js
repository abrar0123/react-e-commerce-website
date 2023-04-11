import React from "react";
import "./header.css";
import Logo1 from "../../../assets/Icons/logo4.png";
import { IoIosSearch, IoIosCart, IoIosHeartEmpty } from "react-icons/io";
import Card from "../../common/UI/Card/card";
import Container from "../../common/UI/Card/Container";

export default function Header() {
  return (
    <header>
      <Card className="headercontainer">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Catagories</a>
            </li>
          </ul>
        </nav>
        <Container>
          <h1>Sephora Store</h1>
        </Container>

        <nav>
          <ul>
            {/* course */}
            <li>
              <a href="#">
                <IoIosSearch color="white" size={25} />
              </a>
            </li>
            <li>
              <a href="#">
                <IoIosHeartEmpty color="white" size={25} />
              </a>
            </li>
            <li>
              <a href="#">
                <IoIosCart color="white" size={25} />
              </a>
            </li>
          </ul>
        </nav>
      </Card>
    </header>
  );
}
