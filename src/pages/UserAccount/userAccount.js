import React, { Suspense, lazy } from "react";
import "./useraccount.css";
import Header from "../../components/MainHeader/firstHeader/Header";
import HeaderSection from "../../components/MainHeader/sectionHeader/headerSection";
import Footer from "../../components/Layout/footer/footer";
import Prefooter from "../../components/Layout/prefooter/prefooter";
import Products from "../../components/Products/products";
import { Route, Routes } from "react-router-dom";
import catagories from "../catagories/catagories";
import Cart from "../../pages/Cart/cart";
import Postheader from "../../components/Layout/postheader/postheader";
import SeparateProduct from "../../components/Products/separateProduct";
import Delivery from "../delivery/delivery";
import Alreadyorder from "../delivery/alreadyorder";
import Signup from "../../sections/auth/Signup";
import User from "../users/user";
import loader from "../../assets/images/loader.gif";

import { MoonLoader, ScaleLoader } from "react-spinners";
import Login from "../../sections/auth/Login";

const HeaderSectionLzLod = lazy(() =>
  import("../../components/MainHeader/sectionHeader/headerSection")
);
const ProductLzLod = lazy(() => import("../../components/Products/products"));
const CatagoryLzLod = lazy(() => import("../catagories/catagories"));

export default function userAccount() {
  return (
    <React.Fragment>
      <Header />
      {/* <HeaderSection /> */}
      {/* <Products /> */}

      <Routes>
        <Route
          path="/"
          //  Component={HeaderSection}
          element={
            <Suspense
              fallback={
                <div className="useraccount">
                  <MoonLoader size={100} color="#36d7b7" />
                </div>
              }
            >
              <HeaderSectionLzLod />
            </Suspense>
          }
        />
        <Route
          path="/Products"
          //  Component={Products}
          element={
            <Suspense
              fallback={
                <div className="useraccount">
                  <MoonLoader size={100} color="#36d7b7" />
                </div>
              }
            >
              <ProductLzLod />
            </Suspense>
          }
        />
        {/* <Route path="/Products" Component={Products} /> */}
        <Route path="/Products/:pid" Component={SeparateProduct} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/login" Component={Login} />

        <Route
          path="/categories"
          //  Component={categories}
          element={
            <Suspense
              fallback={
                <div className="useraccount">
                  <MoonLoader size={100} color="#36d7b7" />
                </div>
              }
            >
              <CatagoryLzLod />
            </Suspense>
          }
        />
        <Route path="/User" Component={User} />

        {/* <Route path="/categories" Component={catagories} /> */}
        {/* CatagoryLzLod */}

        <Route path="/Cart" Component={Cart} />
        <Route path="/delivery" Component={Delivery} />
        <Route path="/Alreadyorder" Component={Alreadyorder} />
      </Routes>

      {/* <HeaderSection /> */}
      <Prefooter />
      <Footer />
    </React.Fragment>
  );
}
