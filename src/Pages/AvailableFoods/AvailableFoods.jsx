import { useQuery } from "@tanstack/react-query";

const AvailableFoods = () => {
  const {
    data: foods,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5001/foods");
      const data = res.json();
      return data;
    },
  });

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {foods?.map((food) => {
          console.log(Object.keys(food).join(","));
          const {
            _id,
            foodImageURL,
            foodName,
            donatorImageURL,
            donatorName,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            status,
          } = food;
          return (
            <article
              key={_id}
              className=" rounded-md shadow-xl grid grid-cols-1 gap-0 md:gap-3 lg:grid-cols-12 shadow-lg mt-5 mx-auto max-w-2xl group cursor-pointer transform duration-500 border"
            >
              <img
                className="w-full md:ml-8 lg:ml-0 rounded-md max-h-[400px] md:h-[400px] lg:h-full object-cover md:w-72 col-span-4"
                src={foodImageURL}
                alt=""
              />

              <div className="col-span-8 p-1">
                <div className=" mb-4">
                  <h1 className="text-2xl mt-3 md:mt-0 mb-3 font-semibold text-gray-800">
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
                <div className="bg-green-100 w-full py-2 px-5">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={donatorImageURL}
                      alt=""
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 font-semibold leading-none hover:text-gray-600">
                        {donatorName}
                      </p>
                      <p className="text-gray-600">Donated</p>
                    </div>
                  </div>
                </div>
                <button className=" hidden md:block w-full px-4 py-2 bg-green-100 font-semibold mt-2 rounded-md">
                  View Details
                </button>
              </div>
              <button className="md:hidden w-full px-4 py-2 bg-green-100 font-semibold bottom-2 left-2 rounded-md">
                View Details
              </button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default AvailableFoods;
