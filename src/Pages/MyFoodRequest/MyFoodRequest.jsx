import axios from "axios";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";
import useQueryData from "../../Hooks/useQueryData";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useProvider from "../../Hooks/useProvider";
import EmptyAnimation from "../../Component/EmptyAnimation/EmptyAnimation";
import HelmetData from "../../Component/HelmetData/HelmetData";

const MyFoodRequest = () => {
  const { user } = useProvider();

  const { data, isLoading, refetch } = useQueryData(
    "requestedFood",
    `https://food-sharing-community-server-three.vercel.app/requestedFoods/${user?.email}`
  );
  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }
  const handleDeleteFood = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://food-sharing-community-server-three.vercel.app/requestedFood/${id}`
          )
          .then((data) => {
            console.log(data.data.deletedCount);
            if (data.data?.deletedCount) {
              toast.success("Cancel Successful");
              refetch();
            }
          });
      }
    });
  };
  return (
    <>
      <HelmetData>My Food Request</HelmetData>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((food) => {
            console.log(food);
            const {
              _id,
              foodImageURL,
              donatorName,
              pickupLocation,
              expiredDateTime,
              donatedMoney,
              requestedDate,
              status,
            } = food;
            return (
              <div
                className=" max-w-lg mx-auto shadow-lg mb-4 p-3"
                key={_id}
              >
                <img
                  className=" h-[270px] w-full"
                  src={foodImageURL}
                  alt=""
                />
                <h2 className=" text-2xl font-semibold text-gray-500 italic text-center my-2 underline">
                  Donor Name: {donatorName}
                </h2>
                <div>
                  <table className=" text-center border py-2 my-4 w-full">
                    <thead>
                      <tr>
                        <th className="border-2 p-3">Expire Date</th>
                        <th className="border-2">Request Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-2 p-3">{expiredDateTime}</td>
                        <td className="border-2">{requestedDate}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xl font-sans text-gray-500">
                  <p>
                    <span className=" underline">Pickup Location</span> :
                    {pickupLocation}
                  </p>
                  <p className="my-2">
                    <span className=" underline">Your Donation Amount</span> :{" "}
                    {donatedMoney}
                  </p>
                  <p>
                    <span className=" underline">Status</span>: available
                  </p>
                </div>
                <div className=" flex gap-3 justify-end">
                  <button className="px-10 py-2 mt-2 text-white bg-green-500 rounded-md">
                    {status}
                  </button>
                  {status.toLowerCase() == "pending" ? (
                    <button
                      onClick={() => handleDeleteFood(_id)}
                      className="px-10 py-2 mt-2 text-white bg-green-500 rounded-md"
                    >
                      Cancel
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyAnimation></EmptyAnimation>
      )}
    </>
  );
};

export default MyFoodRequest;
