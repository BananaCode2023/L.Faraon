import React, { useState, useEffect, useRef } from "react";
import "../css/masterpieces.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdMenuBook, MdRemoveRedEye } from "react-icons/md";
import Story from "./Story";
import View from "./View";
import Headings from "./Headings";
import artDatas from "../Data/artData";
import Titles from "./Titles";
import Buttons from "./Buttons";

function Masterpieces({ selectedIndex, handleIndex }) {
  const [openStory, setOpenStory] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [getId, setGetId] = useState("");

  const swiperRef = useRef(null);

  const handleOpenStory = (id, index) => {
    handleIndex(index);
    setOpenStory(true);
    setGetId(id);
  };
  const close = () => {
    setOpenStory(false);
    setOpenView(false);
  };

  const handleOpenView = (id, index) => {
    handleIndex(index);
    setOpenView(true);
    setGetId(id);
  };

  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <section className="masterpieces">
      <div className="masterpieces-heading">
        <Headings text="MASTERPIECES" />
      </div>
      {openView ? <View id={getId} close={close} /> : ""}
      {openStory ? <Story id={getId} close={close} /> : ""}

      <Swiper
        ref={swiperRef}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="masterpieces-swiper"
      >
        {artDatas.map((artData) => {
          return (
            <SwiperSlide>
              <div className="art-container">
                <div className="gallery-swiper-content">
                  <Titles text={artData.title} />
                  <div className="gallery-swiper-btns">
                    <Buttons
                      buttonType="filledButton"
                      buttonText="Story"
                      buttonIcon={<MdMenuBook />}
                      clickFunc={() => handleOpenStory(artData.id)}
                    />
                    <Buttons
                      buttonType="outlineButton"
                      buttonText="View"
                      buttonIcon={<MdRemoveRedEye />}
                      clickFunc={() => handleOpenView(artData.id)}
                    />
                  </div>
                </div>
                <div
                  className="gallery-swiper-img"
                  onClick={() => handleOpenView(artData.id)}
                >
                  <img src={artData.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Masterpieces;
