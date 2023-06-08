import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList.js";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.js";
import MailList from "../../components/mailList/MailList.js";
import Footer from "../../components/footer/Footer.js";


import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
        </div>
    </div>
  );
};

export default Home;