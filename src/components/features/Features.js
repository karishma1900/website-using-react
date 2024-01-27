import React, {useEffect} from 'react';
import { BsFillBookmarkStarFill } from "react-icons/bs";
import "./Features.css";
import Feature from './Feature';
import { featureList } from "./data"
import phoneFeatures from "../../asset/phone-features.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  

    useEffect(() =>{
      AOS.init({
       duration:1000,
      });
    }, [])
  return (
   <section id="features" >
<div className='container features'>
  <div className='u-title'>
    <BsFillBookmarkStarFill color="orangered" size={30} />
    <h2>Core Features</h2>
    <p className='u-text-small u-text-dark'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

  </div>
  <div className='features-content'>
    <div class="features-left"  data-aos="fade-right">
      <img src={phoneFeatures} alt="phone" />
    </div>
    <div class="features-right"  data-aos="fade-left">
      {
         featureList.map((feature) => (
          <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
         ))
      }
   
    </div>
  </div>
</div>
   </section>   
   )
}

export default Features;