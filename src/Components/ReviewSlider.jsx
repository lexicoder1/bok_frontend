import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/fonzy.avif";
function ReviewSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <> <div className="Review-container">
   
    <div className="Review-container-i">
    <h1>CUSTUMERS REVIEW</h1>
     <Slider {...settings}>
    <div className="Review-container-i-ii">

      <h3>"The Spade team has always been my first choice for WEB3 solutions in a market overrun with con artists and illiterate programmers. Before we met, I struggled to find the necessary information and engineers to realize my vision for my blockchain-based company in the constantly changing digital world. Being kind to customers and ever prepared to offer unbiased advice I have no problem recommending the group to anyone."</h3>
   <div className="Review-container-i-ii-i"><img src={img} alt="" /> <div className="Review-container-i-ii-i-ii"><h1>Fonzy</h1>
   <p>Froggyfriends Nft</p></div></div>
    </div>

    <div className="Review-container-i-ii">

<h3>"The Spade team has always been my first choice for WEB3 solutions in a market overrun with con artists and illiterate programmers. Before we met, I struggled to find the necessary information and engineers to realize my vision for my blockchain-based company in the constantly changing digital world. Being kind to customers and ever prepared to offer unbiased advice I have no problem recommending the group to anyone."</h3>
<div className="Review-container-i-ii-i"><img src={img} alt="" /> <div className="Review-container-i-ii-i-ii"><h1>Fonzy</h1>
<p>Froggyfriends Nft</p></div></div>
</div>

<div className="Review-container-i-ii">

<h3>"The Spade team has always been my first choice for WEB3 solutions in a market overrun with con artists and illiterate programmers. Before we met, I struggled to find the necessary information and engineers to realize my vision for my blockchain-based company in the constantly changing digital world. Being kind to customers and ever prepared to offer unbiased advice I have no problem recommending the group to anyone."</h3>
<div className="Review-container-i-ii-i"><img src={img} alt="" /> <div className="Review-container-i-ii-i-ii"><h1>Fonzy</h1>
<p>Froggyfriends Nft</p></div></div>
</div>
   
    
  </Slider>  
  
  </div>  
  </div>

    </>
  );
}

export default ReviewSlider;