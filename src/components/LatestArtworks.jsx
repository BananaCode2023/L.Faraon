import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Titles from "../components/Titles";
import Buttons from "../components/Buttons";

function LatestArtworks() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section section className="latest-artworks" data-aos="fade-up">
      <Titles text="LATEST ARTWORKS" />

      <Swiper
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination]}
        className="artworks-swiper"
      >
        <SwiperSlide>
          <div className="artwork-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artwork-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artwork-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artwork-img"></div>
        </SwiperSlide>
      </Swiper>

      <div className="artworks-container">
        <div className="artwork"></div>
        <div className="artwork"></div>
        <div className="artwork"></div>
        <div className="artwork"></div>
      </div>
      <Link to="/gallery">
        <Buttons buttonType="outlineButton" buttonText="See More" />
      </Link>
    </section>
  );
}

export default LatestArtworks;
