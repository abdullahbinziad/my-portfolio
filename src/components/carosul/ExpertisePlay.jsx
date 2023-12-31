import React, { Component } from "react";
import Slider from "react-slick";
import html from '../../assets/programing-icons/html.png';
import css from '../../assets/programing-icons/css.png';
import tailwind from '../../assets/programing-icons/tailwind.png';
import bootstrap from '../../assets/programing-icons/bootstrap.png';
import js from '../../assets/programing-icons/js.png';
import react from '../../assets/programing-icons/react.png';
import es6 from '../../assets/programing-icons/es6.png';
import mongodb from '../../assets/programing-icons/mongodb.png';
import firebase from '../../assets/programing-icons/firebase.png';



export default class ExpertisePlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 6,
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
    const updatedSettings = isSmallDevice ? { ...this.state.settings, slidesToShow: 3 } : { ...this.state.settings, slidesToShow: 6 };
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
      <div>
    

        <Slider  className="" {...this.state.settings}>
     <div className=" px-6">    <img className="w-10" src={html} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={css} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={bootstrap} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={tailwind} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={js} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={react} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={es6} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={mongodb} alt="" /></div>
     <div className=" px-6">    <img className="w-10" src={firebase} alt="" /></div>
        </Slider>
      </div>
    );
  }
}