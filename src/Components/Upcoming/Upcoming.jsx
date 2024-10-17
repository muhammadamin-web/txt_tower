/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { Link } from "react-scroll";

const Upcoming = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(true);

  const nextSlide = () => {
    setZoom(true); // Zoom-in boshlanadi
    setTimeout(() => {
      setZoom(false); // 3 sekunddan keyin zoom-out boshlanadi
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Zoom-out tugagach keyingi slaydga o'tish
        setZoom(true); // Keyingi slayd uchun zoom-in boshlanadi
      }, 3000); // 3 sekund zoom-out davomida
    }, 3000); // 3 sekund zoom-in davomida
  };

  useEffect(() => {
    nextSlide(); // Dastlabki renderda birinchi slayd uchun zoom animatsiyasini boshlash
    const autoSlider = setInterval(nextSlide, 6000); // Har bir slaydda umumiy jarayon 6 sekund davom etadi (3 sekund zoom-in + 3 sekund zoom-out)
    return () => clearInterval(autoSlider);
  }, []);

  return (
    <div className="main-carousel" id="home">
      <div className="carousel">
        <div className="items">
          {images &&
            images.map((src, index) => (
              <div
                className={`img_card carousel-image ${index === currentIndex ? "current" : ""}`}
                key={index}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    transform: index === currentIndex && zoom ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 3s' // Transform har doim 3 sekund davomida bo'ladi
                  }}
                />
                <div className="img_text">
                  <div className="container">
                    <div className="upcoming_box">
                      <div className="upcoming_card">
                        <h3
                          className="slidet_text"
                          key={`navimage${index + 1}`}
                        >
                          TXT Tower — qulay va shinam shahar hayoti uchun mukammal tanlov!
                        </h3>
                        <p className="slidet_text2">
                          TXT TOWER — TXT Group kompaniyasi tomonidan Jizzax shahrida barpo etilayotgan koʻp qavatli, komfort toifadagi turar-joy majmuasi.
                        </p>
                      </div>
                      <div className="upcoming_icon2_card">
                        <Link
                          to="houses"
                          smooth={true}
                          offset={-50}
                          duration={500}
                          href="#!"
                          className="upcoming_icon2"
                        >
                          Rejalashtirishni tanlash
                        </Link>
                      </div>
                      <div className="upcoming_icons">
                        <div className="upcoming_icons_card">
                          <a href="#!" className="upcoming_icon">
                            Live
                          </a>
                          <Link
                            to="form"
                            smooth={true}
                            offset={-50}
                            duration={500}
                            href="#!"
                            className="upcoming_icon"
                          >
                            <PiPhoneCallLight className="upcoming_phone" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
