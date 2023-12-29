import { useState, useEffect } from "react";
import "../css/artGallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Masterpieces from "../components/Masterpieces";
import Titles from "../components/Titles";
import artDatas from "../Data/artData";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Gallery() {
  const [index, setIndex] = useState(-1);

  const handleIndex = (artIndex) => {
    setIndex(artIndex);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
        <Masterpieces selectedIndex={index} handleIndex={handleIndex} />

        <section className="art-gallery">
          <Titles text="ART GALLERY" />

          <div className="gallery-container" data-aos="fade-up">
            {artDatas.map((artData, index) => {
              return (
                <div
                  className="art"
                  key={index}
                  onClick={() => handleIndex(index)}
                >
                  <img src={artData.img} alt="" />
                </div>
              );
            })}
          </div>
        </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Gallery;
