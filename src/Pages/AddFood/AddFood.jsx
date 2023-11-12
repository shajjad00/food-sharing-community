import axios from "axios";
import useProvider from "../../Hooks/useProvider";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useProvider();
  const { displayName, email, photoURL } = user;

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const status = form.status.value;

    const foodData = {
      email: email,
      foodImageURL: foodImage,
      foodName: foodName,
      donatorImageURL: photoURL,
      donatorName: displayName,
      foodQuantity: foodQuantity,
      pickupLocation: pickupLocation,
      expiredDateTime: expiredDate,
      additionalNotes: additionalNotes,
      status: status,
    };

    console.log(expiredDate);
    axios
      .post(
        "https://food-sharing-community-server-three.vercel.app/foods",
        foodData,
        { withCredentials: true }
      )
      .then((data) => {
        if (data.data?.insertedId) {
          toast.success("Food Added SuccessFul");
        }
        console.log(data);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[570px] bg-gray-100 p-6 rounded">
          <h2 className="mb-5 block text-center text-xl font-semibold italic text-gray-500 sm:text-xl">
            Add Product
          </h2>
          <form onSubmit={handleAddProduct}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#555]"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="foodImage"
                className="mb-3 block text-base font-medium text-[#555]"
              >
                Food Image Url
              </label>
              <input
                type="text"
                name="foodImage"
                id="foodImage"
                placeholder="Enter your Brand Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="image"
                className="mb-3 block text-base font-medium text-[#555]"
              >
                Food Quantity
              </label>
              <input
                type="text"
                //   defaultValue={image}
                name="foodQuantity"
                placeholder="Enter Food Quantity"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
              />
            </div>

            <div className="mb-5 pt-3">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="productType"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="Enter Pickup Location"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <label
                    htmlFor="rating"
                    className="mb-3 block text-base font-medium text-[#555]"
                  >
                    Expired Date
                  </label>
                  <div className="mb-5">
                    <input
                      type="date"
                      // defaultValue={rating}
                      name="expiredDate"
                      placeholder="Expired Date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Additional Notes
                    </label>
                    <input
                      type="text"
                      // defaultValue={price}
                      name="additionalNotes"
                      placeholder="Additional Notes"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Donator Email
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      name="donatorEmail"
                      placeholder="Enter Price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Donator Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      name="donatorName"
                      placeholder="Enter Price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Donator Image
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.photoURL}
                      name="donatorImage"
                      placeholder="Enter Price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#555]"
                    >
                      Status
                    </label>
                    <input
                      disabled
                      type="text"
                      defaultValue="Available"
                      name="status"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFood;
