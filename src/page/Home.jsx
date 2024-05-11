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
    <div style={{ backgroundColor: bgColor1 }} className="main_page">

      <div className="flex justify-end ">
      </div>  
      <Carousel></Carousel>
      <HomeTabs></HomeTabs>
      <HomeCards/>
    </div>
  );
};

export default Home;
