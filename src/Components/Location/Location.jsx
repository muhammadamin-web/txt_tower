/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/location.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
            TXT Tower turar-joy majmuasi oʻzining strategik joylashuvi bilan ajralib turadi. Shahar markazida joylashuv bilan birga, zarur infratuzilma obyektlari va xizmatlar sizning atrofingizda boʻladi.
                       </p>
            <p className="location_text">
            Atrofda barcha ehtiyojlaringizni qondirish uchun qulay sharoitlar yaratilgan: savdo markazlari, supermarketlar, tibbiyot va taʼlim muassasalari kabi asosiy xizmatlar bir qadam narida joylashgan. TXT Tower — shahar hayotining barcha qulayliklarini oson va tezkor kirish imkoniyati bilan taʼminlaydi!          </p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
           TXT Tower nafaqat yashash uchun qulay joy, balki savdo va xizmatlar uchun ham markazdir. Majmuaning pastki qavatlarida joylashgan savdo majmuasi sizga barcha zaruriy ehtiyojlarni qulay va tez bajarish imkoniyatini beradi. Supermarketlar, doʻkonlar va xizmat ko‘rsatish punktlari bir joyda joylashgani sababli, har kungi ishlarni osonlik bilan amalga oshirishingiz mumkin. Bu, ayniqsa, vaqtni tejashni xohlaydiganlar uchun ideal yechimdir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
