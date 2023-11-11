import { useParams } from "react-router-dom";
import useQueryData from "../../Hooks/useQueryData";
import axios from "axios";
import toast from "react-hot-toast";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";

const UpdateFood = () => {
  const { id } = useParams();

  const { data: foodData, isLoading } = useQueryData(
    "updateFood",
    `http://localhost:5001/foods/${id}`
  );

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }

  const {
    _id,
    foodImageURL,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    status,
  } = foodData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImageURL.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const status = form.status.value;

    const foodData = {
      foodName: foodName,
      foodImageURL: foodImage,
      foodQuantity: foodQuantity,
      pickupLocation: pickupLocation,
      expiredDateTime: expiredDate,
      additionalNotes: additionalNotes,
      status: status,
    };
    console.log(foodData);

    axios
      .patch(`http://localhost:5001/foods/${_id}`, foodData, {
        withCredentials: true,
      })
      .then((data) => {
        if (data.data?.modifiedCount) {
          toast.success("Food Update Successful");
        }
      });
  };

  return (
    <>
      <div className="bg-white border rounded-md shadow-lg relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Update Food</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Food Name
                </label>
                <input
                  type="text"
                  name="foodName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={foodName}
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Food Image URL
                </label>
                <input
                  type="text"
                  name="foodImageURL"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={foodImageURL}
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Food Quantity
                </label>
                <input
                  type="number"
                  name="foodQuantity"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={foodQuantity}
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={pickupLocation}
                  required=""
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="expiredDate"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Expired Date
                </label>
                <input
                  type="date"
                  name="expiredDate"
                  id="expiredDate"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={expiredDateTime}
                  required=""
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="expiredDate"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Additional Notes
                </label>
                <input
                  type="text"
                  name="additionalNotes"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={additionalNotes}
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="expiredDate"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={status}
                  required=""
                />
              </div>
            </div>
            {/* Update button */}
            <div className="p-6 mt-5 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFood;
