import React from "react";
import Image from "next/image";
import ImageBanner from "../components/ImageBanner";
import Banner1 from "../../../public/images/bo-pik.png";
import Banner2 from "../../../public/images/bo-gading.png";
import Banner3 from "../../../public/images/bo-serpong.png";
import MapPin from "../../../public/icons/map-pin.svg";

const Homepage = () => {
  return (
    <section className="container mt-4">
      <div className="">
        <div className="row align-items-start justify-content-between">
          <div className="col-9">
            <h2 className="home-header">
              Choose Your <span>Place</span>
            </h2>
          </div>
          <div className="col-3">
            <Image src={MapPin} alt="map-pin-icon" />
          </div>
        </div>
      </div>
      <div className="row">
        <p className="txt-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        </p>
        <div className="col-md-4">
          <ImageBanner
            imageUrl={Banner1} // Replace with your image URL
            link="/reservation" // Replace with the link to the first page
            altText="Banner 1"
          />
        </div>
        <div className="col-md-4">
          <ImageBanner
            imageUrl={Banner2} // Replace with your image URL
            link="/reservation" // Replace with the link to the second page
            altText="Banner 2"
          />
        </div>
        <div className="col-md-4">
          <ImageBanner
            imageUrl={Banner3} // Replace with your image URL
            link="/reservation" // Replace with the link to the third page
            altText="Banner 3"
          />
        </div>
      </div>
      <div className="footer-homepage">
        <p>Read our <span>Terms & Condition, Privacy Policy</span></p>
      </div>
    </section>
  );
};

export default Homepage;
