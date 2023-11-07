import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation2.json";

const LottieAnimation = () => {
  return (
    <>
      <div className=" w-3/5 mx-auto">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    </>
  );
};

export default LottieAnimation;
