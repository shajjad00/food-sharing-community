import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import useQueryData from "../../../Hooks/useQueryData";
import LottieAnimation from "../../../Component/LottieAnimation/LottieAnimation";

const Banner = () => {
  const { data, isLoading } = useQueryData(
    "foods",
    "https://food-sharing-community-server-three.vercel.app/foods"
  );
  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCreative]}
      className=""
      effect="creative"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide changed")}
      onSwiper={() => console.log(Swiper)}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="hero mt-4 mb-10 min-h-screen md:min-h-[500px] rounded-md"
            style={{ backgroundImage: `url(${item?.foodImageURL})` }}
          >
            <div className="hero-overlay rounded-md bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="text-2xl text-gray-300 font-bold">
                  {item.slogan}
                </h1>
                <h2 className="text-white text-xl font-bold">
                  {item.foodName}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
