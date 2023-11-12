import { useParams } from "react-router-dom";
import useQueryData from "../../Hooks/useQueryData";
import Modal from "../../Component/Modal/Modal";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";

const FoodDetails = () => {
  const { id } = useParams();

  console.log(id);
  const { data: food, isLoading } = useQueryData(
    "foodDetails",
    `https://food-sharing-community-server-three.vercel.app/foods/${id}`
  );

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }
  console.log(food);
  const {
    foodImageURL,
    foodName,
    donatorImageURL,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
  } = food;

  return (
    <>
      <div className="mt-20">
        <div>
          <h2 className="text-center mt-3 text-2xl italic text-gray-400">
            Food Information
          </h2>
          <div className="max-w-sm my-4 mx-auto">
            <hr />
          </div>
          <div className="flex shadow-xl max-w-xl mx-auto justify-center items-center gap-4">
            <div className="relative flex-1 mt-5">
              <img
                className="h-64 w-full object-cover rounded-md"
                src={foodImageURL}
                alt=""
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">{foodName}</h2>
              </div>
            </div>
            <div className="text-center pr-2">
              <div>
                <p className="text-lg italic text-gray-600 font-medium">
                  <span className="underline">Food Quantity</span>:{" "}
                  {foodQuantity} servings
                </p>
                <p className="text-lg italic text-gray-600 font-medium">
                  <span className="underline">Expired Date</span>:{" "}
                  {expiredDateTime}
                </p>
              </div>

              <div>
                <Modal food={food}></Modal>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5 text-2xl italic text-gray-400">
          Donor Information
        </h2>
        <div className="max-w-sm my-4 mx-auto">
          <hr />
        </div>
        <div className="flex  rounded-md border border-gray-100 bg-white  shadow-lg max-w-xl mx-auto">
          <img
            className="object-cover w-60"
            src={donatorImageURL}
            alt=""
          />

          <div className="ml-4">
            <p className="text-xl font-bold italic text-gray-700">Donator</p>
            <p className="text-lg italic text-gray-500 font-medium">
              <span className="underline">Name</span>: {donatorName}
            </p>
            <p className="text-lg italic text-gray-500 font-medium">
              {" "}
              <span className="underline">Pickup Location</span>:{" "}
              {pickupLocation}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
