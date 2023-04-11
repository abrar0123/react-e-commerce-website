import React from "react";
import Header from "../../components/MainHeader/firstHeader/Header";
import HeaderSection from "../../components/MainHeader/sectionHeader/headerSection";
import Footer from "../../components/Layout/footer/footer";
import Prefooter from "../../components/Layout/prefooter/prefooter";
export default function userAccount() {
  return (
    // Card style={{ margin: "0px 20px" }}
    <React.Fragment>
      <Header />
      <HeaderSection />
      <Prefooter />
      <Footer />
    </React.Fragment>
  );
}
