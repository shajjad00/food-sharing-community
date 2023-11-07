import Lottie from "lottie-react";
import emptyAnimation from "../../assets/empty.json";

const EmptyAnimation = () => {
  return (
    <div className=" w-3/5 mx-auto">
      <Lottie animationData={emptyAnimation}></Lottie>
    </div>
  );
};

export default EmptyAnimation;
