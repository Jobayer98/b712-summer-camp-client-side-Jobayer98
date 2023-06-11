import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import img_1 from "../../assets/banner_1.jpg";
import img_2 from "../../assets/banner_2.jpg";
import img_3 from "../../assets/banner_3.jpg";
import img_4 from "../../assets/banner_4.jpg";
import img_5 from "../../assets/banner_5.jpg";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
        <img loading="lazy" src={img_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src={img_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src={img_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src={img_4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src={img_5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
