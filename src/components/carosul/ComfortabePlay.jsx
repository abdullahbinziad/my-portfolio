import React, { Component } from "react";
import Slider from "react-slick";
import jwt from '../../assets/programing-icons/comfortable/jwt.png';
import nodejs from '../../assets/programing-icons/comfortable/node.png';
import axios from '../../assets/programing-icons/comfortable/axios.png';

import expressjs from '../../assets/programing-icons/comfortable/express-js.png';
import ts from '../../assets/programing-icons/comfortable/ts.png';





export default class ComfortabePlay extends Component {


constructor(props) {
  super(props);
  this.state = {
    settings: {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    },
  };
}

updateSettings = () => {
  const isSmallDevice = window.innerWidth <= 640; // Define your desired small device breakpoint
  const updatedSettings = isSmallDevice ? { ...this.state.settings, slidesToShow: 2 } : { ...this.state.settings, slidesToShow: 4 };
  this.setState({ settings: updatedSettings });
};

componentDidMount() {
  this.updateSettings();
  window.addEventListener('resize', this.updateSettings);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateSettings);
}

render() {

  return (
    <div className="">
       <h1 className="text-white">Comfortable</h1>
    <div className=" rounded  md:rounded-lg">
 

      <Slider  className="" {...this.state.settings}>
      <div className=" px-6">    <img className="w-24" src={nodejs} alt="" /></div>
     <div className=" px-6">    <img className="w-24" src={expressjs} alt="" /></div>
     <div className=" px-6">    <img className="w-24" src={jwt} alt="" /></div>
     <div className=" px-6">    <img className="w-24" src={ts} alt="" /></div>
    <div className=" px-6">    <img className="w-24" src={axios} alt="" /></div>
      </Slider>
    </div>
    </div>
  );
} }