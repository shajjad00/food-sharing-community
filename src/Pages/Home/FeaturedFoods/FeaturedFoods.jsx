import { Link } from "react-router-dom";
import useQueryData from "../../../Hooks/useQueryData";
import LottieAnimation from "../../../Component/LottieAnimation/LottieAnimation";

const FeaturedFoods = () => {
  const { data, isLoading } = useQueryData(
    "featuredFood",
    "https://food-sharing-community-server-three.vercel.app/featuredFood"
  );
  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }
  console.log(data);
  return (
    <>
      <div className=" text-center max-w-xl mx-auto mt-10">
        <h3 className=" italic text-2xl text-gray-800 dark:text-[#ddd]">
          Featured Foods
        </h3>
        <div className="w-[200px] mt-2 mx-auto h-[4px]">
          <hr />
        </div>
        <p className="italic text-sm mt-2 my-4 text-gray-400 dark:text-[#ddd]">
          Food is more than just something we eat to survive. It is a central
          part of our lives, and it connects us to each other and to our
          cultures
        </p>
      </div>
      <div className="grid grid-cols-1 p-4 max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => {
          const {
            _id,
            foodImageURL,
            foodName,
            donatorImageURL,
            donatorName,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
          } = item;
          return (
            <div
              key={_id}
              className="max-w-md bg-gray-100 shadow-lg dark:bg-gray-700 "
            >
              <div>
                <div className="group relative h-[280px]">
                  <img
                    className="w-full object-cover h-[280px]"
                    src={foodImageURL}
                  />
                  <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-400 opacity-0 bg-opacity-60 group-hover:h-full group-hover:opacity-100 duration-500">
                    <h2 className="text-2xl font-semibold text-white text-center">
                      {foodName}
                    </h2>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl my-3 font-semibold text-gray-600 text-center">
                {foodName}
              </h2>
              <div className="text-center p-2 ">
                <table className="w-full bg-gray-100">
                  <tbody className="">
                    <tr className="border">
                      <td className="py-4 text-center w-1/2 border whitespace-nowrap text-sm font-medium text-gray-900">
                        Quantity
                      </td>
                      <td className="text-sm text-center text-gray-900 font-light py-4 whitespace-nowrap">
                        {foodQuantity} servings
                      </td>
                    </tr>
                    <tr className="bg-gray-100 border">
                      <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                        Pickup location
                      </td>
                      <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                        {pickupLocation}
                      </td>
                    </tr>
                    <tr className="bg-gray-100 border ">
                      <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                        Expiration date
                      </td>
                      <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                        {expiredDateTime}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="bg-gray-100 w-full py-2 border px-5 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={donatorImageURL}
                        alt=""
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 text-left font-semibold leading-none hover:text-gray-600">
                          {donatorName}
                        </p>
                        <p className="text-gray-600 text-left">Donated</p>
                      </div>
                    </div>
                    <Link to={`/foods/${_id}`}>
                      <button className="w-full px-4 py-2 bg-[#EE343F] font-semibold bottom-2 left-2 rounded-md text-white">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to="/availableFoods">
          <button className=" px-10 py-2 border border-[#EE343F] font-semibold bottom-2 left-2 hover:bg-gray-200 hover:font-bold rounded-md text-[#EE343F]">
            Show ALL
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedFoods;
