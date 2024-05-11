import React from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import Carousel from "../component/Carousel";
import Header from "../component/Header";
import HomeCards from "../component/HomeCards";
import HomeTabs from "../component/HomeTabs";

const Home = () => {
  const {
    bgColor1,
  } = useSelector((state) => state.theme);
 

  const { t, i18n } = useTranslation();

  return (
    <div style={{ backgroundColor: bgColor1 }} className="text-4xl ">
      {/* <p>{t(`Home`)}</p>
      <p style={{ color: secondaryText }} className="">{t(`Sports`)}</p>

      <input placeholder={`${t(`enter`)} ${t(`your`)} ${t(`name`)}`} /> */}
    
      <div className="flex justify-end ">
      </div>  
      <Header></Header>
      <Carousel></Carousel>
      <HomeTabs></HomeTabs>
      <HomeCards/>
    </div>
  );
};

export default Home;
