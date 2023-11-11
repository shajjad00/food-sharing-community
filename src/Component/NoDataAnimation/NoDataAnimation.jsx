import Lottie from "lottie-react";
import noDataAnimation from "../../assets/noData.json";

const NoDataAnimation = () => {
  return (
    <>
      <div className=" w-3/5 mx-auto">
        <Lottie animationData={noDataAnimation}></Lottie>
      </div>
    </>
  );
};

export default NoDataAnimation;
