import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import Headings from "../components/Headings";
import Titles from "../components/Titles";
import Buttons from "../components/Buttons";
import heroImg1 from "../assets/lfaraon-hero4.png";
import img1 from "../assets/img1.jpg";
import Testimonies from "../components/Testimonies";
import LatestArtworks from "../components/LatestArtworks";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import img2 from "../assets/lfaraon-hero6.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
        <div className="homepage">
          <section className="hero" data-aos="fade-up">
            <img src={heroImg1} alt="" />
            <div className="hero-text">
              <Headings text="EXPLORE EMOTIONS EXPRESSED IN BRUSH STROKES" />
              <Titles text="L.FARAON" />
              <p>Realism & Abstract Expressionism Painter</p>
              <Link to="/gallery">
                <Buttons buttonType="outlineButton" buttonText="See Paintings" />
              </Link>
            </div>
          </section>

          <section className="homepage-article" data-aos="fade-up">
            <div className="article-text">
              <Titles text="A GENERATIONAL TALENT" />
              <p>
                He never thought that being just an aspiring artist before would
                lead him to different opportunities in his life. His expertise
                gave him a great way of living, he was able to help his family, he
                was able to reach out to those individuals who are really in need,
                and he was able to inspire and push other artists, particularly
                young people, to pursue their God-given talent.
              </p>
              <Link to="/artist">
                <Buttons buttonType="outlineButton" buttonText="Read More" />
              </Link>
            </div>
            <img src={img1} alt="leonard faraon" />
          </section>

          <LatestArtworks />

          <Testimonies />

          <section className="keep-updated" data-aos="fade">
            <div className="keep-updated-hero">
              <img src={img2} alt="" />
              <div className="keep-updated-heading">
                <Titles text="KEEP UPDATED WITH L.FARAON" />
                <p>Follow me on my social media pages for latest updates</p>
              </div>
              <div className="keep-updated-btns">
                <Link to="https://www.facebook.com/Lfaraon14" target="_blank">
                  <Buttons
                    buttonType="outlineButton"
                    buttonText="Facebook"
                    buttonIcon={<FaFacebookF />}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/l.faraon_arts/"
                  target="_blank"
                >
                  <Buttons
                    buttonType="outlineButton"
                    buttonText="Instagram"
                    buttonIcon={<RiInstagramFill />}
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Homepage;
