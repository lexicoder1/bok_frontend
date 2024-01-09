import Hero from "../Components/Hero"
import Slider from "../Components/Slider"
import Icons from "../Components/Icons"
import Web3 from "../Components/Web3"
import BusinessValues from "../Components/BusinessValues"
import ReviewSlider from '../Components/ReviewSlider'
import Software from '../Components/Software'



import { Route, Routes } from "react-router-dom";


function Home() {
   

  return (
    <>
   <Hero/>
   <Slider/>
   <Icons/>
   <Web3/>
   <BusinessValues/>
   <Software/>
   <ReviewSlider/>
    </>
  );
}

export default Home;
