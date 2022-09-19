import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";
import Events from "../components/Events";
import CTA from "../components/CTA";
import About from "../components/About";
import MenuList from "../components/MenuList";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Header>
        <HeaderText></HeaderText>
        <Button />
        <About />
        <MenuList />
        <Events />
        <CTA />
      </Header>
    </>
  );
};

export default Home;
