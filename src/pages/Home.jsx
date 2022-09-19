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
      <Header hero='homeHeader'>
        <HeaderText
          title='Exquisite dining since 1989'
          subtitle='Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.'
        />
        <Button />
      </Header>
      {/* <Button />
        <About />
        <MenuList />
        <Events />
        <CTA /> */}
    </>
  );
};

export default Home;
