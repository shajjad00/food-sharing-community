import { Link } from "react-router-dom";
import useQueryData from "../../Hooks/useQueryData";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";
import { useEffect, useState } from "react";
import axios from "axios";
import HelmetData from "../../Component/HelmetData/HelmetData";

const AvailableFoods = () => {
  const [foods, setFoods] = useState(null);
  const [searchFoods, setSearchFoods] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const { data, isLoading } = useQueryData(
    "foods",
    "https://food-sharing-community-server-three.vercel.app/foods"
  );
  useEffect(() => {
    setFoods(data);
  }, [data]);

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }

  // search data

  const handleSearch = (e) => {
    setIsClicked(true);
    e.preventDefault();
    const text = e.target.text.value;
    console.log(text);
    const filteredFood = foods?.filter((food) => {
      return food.foodName.toLowerCase().includes(text.toLowerCase());
    });
    console.log(filteredFood);
    setSearchFoods(filteredFood);
  };

  //sort data

  const handleSort = (e) => {
    e.preventDefault();
    setIsClicked(false);
    const value = e.target.value;
    console.log(value);
    axios
      .get(
        `https://food-sharing-community-server-three.vercel.app/foods/sort?sortBy=${value}`
      )
      .then((data) => {
        console.log(data.data);
        setFoods(data.data);
      });
  };

  return (
    <>
      <HelmetData>Available Foods</HelmetData>
      <section className="flex flex-col md:flex-row items-center gap-6 justify-between">
        <form onSubmit={handleSearch}>
          <input
            className="p-2 border rounded-md border-gray-400"
            type="text"
            name="text"
            placeholder="Search Here..."
          />
          <input
            className="px-8 py-2 ml-3 border border-[#EE343F] italic  text-[#EE343F]"
            type="submit"
            value="Search"
          />
        </form>
        {/* select */}
        <form className="form-control w-full max-w-xs">
          <select
            onChange={handleSort}
            className="select select-bordered hover:outline-none focus:outline-none"
          >
            <option
              selected
              disabled
            >
              Sort
            </option>
            <option value="expiredDateTime">Sort by Date</option>
            <option value="foodName">Sort by Name</option>
          </select>
        </form>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {isClicked
          ? searchFoods?.map((food) => {
              const {
                _id,
                foodImageURL,
                foodName,
                donatorImageURL,
                donatorName,
                foodQuantity,
                pickupLocation,
                expiredDateTime,
              } = food;
              return (
                <article
                  key={_id}
                  className=" rounded-md grid grid-cols-1 gap-0 md:gap-3 lg:grid-cols-12 shadow-lg mt-5 mx-auto max-w-2xl group cursor-pointer transform duration-500 border"
                >
                  <img
                    className="h-[400px]  lg:h-full w-[450px] md:w-full object-cover md:col-span-4 md:ml-8 lg:ml-0 rounded-md"
                    src={foodImageURL}
                    alt=""
                  />

                  <div className="md:col-span-8 p-1">
                    <div className=" mb-4">
                      <h1 className="text-2xl capitalize mt-3 md:mt-0 mb-3 font-semibold text-gray-800">
                        {foodName}
                      </h1>
                      <table className="w-full">
                        <tbody className="">
                          <tr className="border">
                            <td className="py-4 text-center w-1/2 border whitespace-nowrap text-sm font-medium text-gray-900">
                              Quantity
                            </td>
                            <td className="text-sm text-center text-gray-900 font-light py-4 whitespace-nowrap">
                              {foodQuantity} servings
                            </td>
                          </tr>
                          <tr className="bg-white border">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                              Pickup location
                            </td>
                            <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                              {pickupLocation}
                            </td>
                          </tr>
                          <tr className="bg-white border">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                              Expiration date
                            </td>
                            <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                              {expiredDateTime}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-[#EE343F] w-full py-2 px-5">
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full mr-4"
                          src={donatorImageURL}
                          alt=""
                        />
                        <div className="text-sm text-white">
                          <p className=" font-semibold capitalize">
                            {donatorName}
                          </p>
                          <p className="font-semibold capitalize">Donated</p>
                        </div>
                      </div>
                    </div>
                    <Link to={`/foods/${_id}`}>
                      <button className=" hidden md:block w-full px-4 py-2 bg-[#EE343F] text-white font-semibold mt-2 rounded-md">
                        View Details
                      </button>
                    </Link>
                  </div>
                  <Link to={`/foods/${_id}`}>
                    <button className="md:hidden w-full px-4 py-2 bg-[#EE343F] font-semibold bottom-2 left-2 rounded-md text-white">
                      View Details
                    </button>
                  </Link>
                </article>
              );
            })
          : foods?.map((food) => {
              const {
                _id,
                foodImageURL,
                foodName,
                donatorImageURL,
                donatorName,
                foodQuantity,
                pickupLocation,
                expiredDateTime,
              } = food;
              console.log("render foods");
              return (
                <article
                  key={_id}
                  className=" rounded-md grid grid-cols-1 gap-0 md:gap-3 lg:grid-cols-12 shadow-lg mt-5 mx-auto max-w-2xl group cursor-pointer transform duration-500 border"
                >
                  <img
                    className="h-[400px]  lg:h-full w-[450px] md:w-full object-cover md:col-span-4 md:ml-8 lg:ml-0 rounded-md"
                    src={foodImageURL}
                    alt=""
                  />

                  <div className="md:col-span-8 p-1">
                    <div className=" mb-4">
                      <h1 className="text-2xl capitalize mt-3 md:mt-0 mb-3 font-semibold text-gray-800">
                        {foodName}
                      </h1>
                      <table className="w-full">
                        <tbody className="">
                          <tr className="border">
                            <td className="py-4 text-center w-1/2 border whitespace-nowrap text-sm font-medium text-gray-900">
                              Quantity
                            </td>
                            <td className="text-sm text-center text-gray-900 font-light py-4 whitespace-nowrap">
                              {foodQuantity} servings
                            </td>
                          </tr>
                          <tr className="bg-white border">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                              Pickup location
                            </td>
                            <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                              {pickupLocation}
                            </td>
                          </tr>
                          <tr className="bg-white border">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                              Expiration date
                            </td>
                            <td className="text-sm w-1/2 border text-gray-900 font-light text-center py-4 whitespace-nowrap">
                              {expiredDateTime}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-[#EE343F] w-full py-2 px-5">
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full mr-4"
                          src={donatorImageURL}
                          alt=""
                        />
                        <div className="text-sm text-white">
                          <p className=" font-semibold capitalize ">
                            {donatorName}
                          </p>
                          <p className="font-semibold">Donated</p>
                        </div>
                      </div>
                    </div>
                    <Link to={`/foods/${_id}`}>
                      <button className=" hidden md:block w-full px-4 py-2 bg-[#EE343F] text-white font-semibold mt-2 rounded-md">
                        View Details
                      </button>
                    </Link>
                  </div>
                  <Link to={`/foods/${_id}`}>
                    <button className="md:hidden w-full px-4 py-2 bg-[#EE343F] font-semibold bottom-2 left-2 rounded-md text-white">
                      View Details
                    </button>
                  </Link>
                </article>
              );
            })}
      </section>
    </>
  );
};

export default AvailableFoods;
