import About from "./Components/About/About";
import Company from "./Components/Company/Company";
import Construction from "./Components/Construction/Construction";
import Footer from "./Components/Footer/Footer";
import Blocks_location from "./Components/Blocks_location/Blocks_location";
import Location from "./Components/Location/Location";
import Nav from "./Components/Nav/Nav";
import Upcoming from "./Components/Upcoming/Upcoming";
import img1 from "./assets/images/slider1.jpg";
import img2 from "./assets/images/slider2.jpg";
import img3 from "./assets/images/slider3.jpg";
import Send_form from "./Components/Send_form/Send_form";
import Block_average from "./Components/Block_average/Block_average";
import Houses_plan from "./Components/Houses_plan/Houses_plan";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";
import { Helmet } from "react-helmet";
import average from './assets/images/avarage.jpg'
import average2 from './assets/images/banner1.jpg'
import average3 from './assets/images/banner2.jpg'
import average4 from './assets/images/banner3.jpg'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 2 soniya kutish
      } else {
        const interval = setInterval(() => {
          if (document.readyState === 'complete') {
            setTimeout(() => {
              setIsLoading(false);
            }, 1000); // 2 soniya kutish
            clearInterval(interval);
          }
        }, 100);
      }
    };

    handlePageLoad();
    window.addEventListener('load', handlePageLoad);

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  const images = [img1, img2, img3];

  return (
    <>
      <Helmet>
        <script defer src="https://example.com/some-script.js"></script>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Upcoming images={images} />
          <About />
          <Location />
          <Block_average img={average} />
          <Blocks_location />
          <Block_average img={average2} />

          <Houses_plan />
          <Send_form />
          <Block_average img={average3} />

          <Company />
          <Block_average img={average4} />

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
