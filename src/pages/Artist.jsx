import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/artist.css";
import { MdEmail } from "react-icons/md";
import discoverDatas from "../Data/discoverDatas";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../components/ScrollToTop";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Headings from "../components/Headings";
import heroImg1 from "../assets/lfaraon-hero7.jpg";
import Titles from "../components/Titles";
import Buttons from "../components/Buttons";

function Artist() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
        <section className="artist" data-aos="fade-up">
          <div className="artist-hero">
            <img src={heroImg1} alt="" />
            <div className="artist-hero-heading">
              <p>Artist</p>
              <Headings text="JAN LEONARD FARAON" />
            </div>
          </div>
          <div className="artist-hero-text">
            <p>Artist</p>
            <Headings text="JAN LEONARD FARAON" />
          </div>
        </section>
        <section className="artist-article">
          <div className="article1" data-aos="fade-up">
            <img src={img1} alt="" />
            <div className="artist-article-text">
              <Titles text="FROM HOBBY TO PASSION" />
              <p>
                It was 2014 since he started his career in arts. He attended
                formal summer workshop at San Pablo City Laguna. After the
                session, he joined Pableños Group of artists which helped him to
                be motivated to turn his hobby into passion. LFaraon is part of
                the Kulay ng Pitong Lawa Art Group in San Pablo City and
                Philippine Guild of watercolorist now.
                <br />
                <br />
                Having a group in the industry of arts helps him to grow as an
                artist and learn new styles from his co-artists. He never thought
                that being just an aspiring artist before would lead him to
                different opportunities in his life. His expertise gave him a
                great way of living, he was able to help his family, he was able
                to reach out to those individuals who are really in need, and he
                was able to inspire and push other artists, particularly young
                people, to pursue their God-given talent.
              </p>
            </div>
          </div>

          <div className="article2" data-aos="fade-up">
            <img src={img2} alt="" />
            <p>
              His paintings are a mere reflection of what kind of person he is. A
              very meticulous and perfectionist young man who always strives for
              the best in everything he does. He usually paints landscapes and
              still life and his mediums are mostly acrylic and oil paint. Also,
              he paints not only on canvas but also in traditional hand-woven
              bayong, having mural paintings, customized shoes, hand-painted cakes
              by Sweetypienada bakery shop, and fabric clothes.
              <br />
              <br />
              LFaraon is also active in joining the Interschool Art competition at
              Canossa College San Pablo and De La Salle Lipa, where he has
              received several awards and recognitions. At present, he is
              exploring the world of watercolor and tattooing. His forte is a mix
              combination of realism and abstract expressionism. Furthermore, he
              loves to keep on learning constantly and makes time for a
              self-in-depth analysis to help him visualize what must be improved
              for his professional progress.
            </p>
          </div>
        </section>

        <section className="discover-artist">
          <Titles text="DISCOVER L.FARAON" />
          <div className="discover-container" data-aos="fade-up">
            {discoverDatas.map((discoverData) => {
              return (
                <div className="talent" key={discoverData.id}>
                  <img src={discoverData.img} alt="talent" />
                  <div className="talent-overlay">
                    <p>{discoverData.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/contact">
            <Buttons
              buttonText="Contact"
              buttonType="outlineButton"
              buttonIcon={<MdEmail />}
            />
          </Link>
        </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Artist;
