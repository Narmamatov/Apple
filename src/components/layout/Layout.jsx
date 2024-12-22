import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainRouter from "../routes/MainRouter";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <section className={scss.layout}>
      <Header />
      <main>
        <MainRouter />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
