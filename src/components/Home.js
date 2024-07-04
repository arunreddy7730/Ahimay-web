import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slideImage1 from '../Assets/ah-banner-main1 (1).jpg'; // Adjust the path to your first image
import slideImage2 from '../Assets/carousel2.jpg'; // Adjust the path to your second image
import './Home.css'

const Home = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        autoPlay 
        interval={5000} 
        stopOnHover={false}
      >
        <div className="slide">
          <img src={slideImage1} alt="Slide 1" />
          <div className="text-center">
            <h1>
              We help companies modernize technology, reimagine processes and transform experiences so they stay ahead in a fast-changing world.
            </h1>
          </div>
        </div>
        <div className="slide">
          <img src={slideImage2} alt="Slide 2" />
          <div className="text-center">
            <h1>
              This is the second slide text, centered on the image.
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
