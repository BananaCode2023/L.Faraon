import { useEffect } from "react";
import "../css/homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import testimoniesData from "../Data/testimonies";
import { FaQuoteRight } from "react-icons/fa6";
import Titles from "../components/Titles";

function Testimonies() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="testimonies" data-aos="fade-up">
      <div className="testimonies-title">
        <Titles text="TESTIMONIES" />
        <p>Greatness isn't announced, it is felt.</p>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="testimonies-swiper"
      >
        {testimoniesData.map((testimony) => {
          return (
            <SwiperSlide>
              <div className="testimony-container">
                <FaQuoteRight />
                <p>{testimony.comment}</p>
                <small>{testimony.name}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="testimonies-wrapper">
        {testimoniesData.map((testimony) => {
          return (
            <div className="testimony-container">
              <FaQuoteRight />
              <p>{testimony.comment}</p>
              <small>{testimony.name}</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonies;
