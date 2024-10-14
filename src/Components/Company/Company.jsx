// /* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import universal from "../../assets/images/universal.png";
import { useEffect } from "react";
import { useRef } from "react";

const Company = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
          animateNumber(0, 2357, 1000, setNumber1);
          animateNumber(0, 188430, 1000, setNumber2);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);
  const animateNumber = (start, end, duration, setNumber) => {
    const increment = (end - start) / (duration / 1);
    let currentNumber = start;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= end) {
        setNumber(end);
        clearInterval(timer);
      } else {
        setNumber(Math.round(currentNumber));
      }
    }, 1);
  };
  return (
    <div className="company">
      <div className="container">
        <div className="company_box">
          <div className="company_card">
            <div className="company_card_top">
              <h2 className="company_title">Quruvchi kompaniya to‘g‘risida</h2>
              <p className="company_text">
                Xurshid Turayev boshchiligidagi TXT Group yirik va zamonaviy
                qurilish kompaniyasi boʻlib, Oʻzbekistonning 10 dan ortiq tuman
                va shaharlarida turar-joy majmualari barpo etgan. Kompaniya
                2011-yilda tashkil etilgan va shu vaqt ichida ishonchli hamda
                samarali hamkor sifatida tanilgan.
              </p>
              <p className="company_text">
                Har bir loyiha biz uchun nafaqat biznes, balki oʻz
                mijozlarimizga eng yaxshi yashash sharoitlarini taqdim etish
                imkoniyatidir. Bizning asosiy missiyamiz mustahkam va qulay
                uy-joylar qurish orqali xalqimizning farovonligini
                taʼminlashdir.
              </p>
              <p className="company_text">
                Kompaniyamiz sifat, mustahkamlik va zamonaviy yondashuvlar
                asosida eng yuqori darajadagi qurilish xizmatlarini taqdim
                etishni oʻz oldiga maqsad qilgan. Har bir loyiha biz uchun
                oʻziga xosdir, shuning uchun biz nafaqat texnik
                koʻrsatkichlarga, balki mijozlarimizning istak va ehtiyojlariga
                ham katta eʼtibor qaratamiz.
              </p>
              <p className="company_text">
                Biz bilan hamkorlik qilib, siz barqaror va mustahkam qurilish
                yechimlarini tanlaysiz. Biz sizning ishonchingizni oqlash va
                orzularingizdagi loyihani hayotga tatbiq etish uchun doim
                harakatdamiz!
              </p>
              <p className="company_text">
                <a href="https://www.txt.group/">www.txt.group</a> saytiga tashrif buyurib, kompaniya faoliyati haqida batafsil maʼlumot olishingiz mumkin.
              </p>
            </div>
          </div>
          <div className="company_card_img">
            <img src={universal} alt="" className="company_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
