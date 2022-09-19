import React from "react";

const HeaderText = ({ title, subtitle }) => {
  return (
    <>
      <h1 className='hero__title'>{title}</h1>
      <p className='hero__subtitle'>{subtitle}</p>
    </>
  );
};

export default HeaderText;
