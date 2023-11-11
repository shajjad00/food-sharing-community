import { useParams } from "react-router-dom";
import useQueryData from "../../Hooks/useQueryData";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";
import axios from "axios";
import toast from "react-hot-toast";
import NoDataAnimation from "../../Component/NoDataAnimation/NoDataAnimation";

const ManageSingleFood = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading } = useQueryData(
    "singleRequestedFood",
    `http://localhost:5001/requestedFood/${id}`
  );

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }

  if (!data) {
    return <NoDataAnimation></NoDataAnimation>;
  }
  const {
    requesterName,
    requesterImage,
    requesterEmail,
    requestedDate,
    status,
    foodId,
  } = data;

  console.log(id);
  console.log(data);
  const handleUpdateStatus = () => {
    axios
      .patch(
        `http://localhost:5001/requestedFoodItem/${foodId}`,
        {
          status: "confirmed",
        },
        { withCredentials: true }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data) {
          toast.success("Delivered Successful");
        }
      });
  };

  return (
    <>
      <div className="flex py-6 px-3 shadow-lg rounded-md bg-gray-100 max-w-lg mx-auto">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={requesterImage}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 justify-between items-end">
          <div>
            <div className="text-base font-medium text-gray-900">
              <h3 className="italic text-gray-400 text-2xl">{requesterName}</h3>
              <p className="italic text-gray-400">
                Requested Date : {requestedDate}
              </p>
              <p className="italic text-gray-400 text-lg">{requesterEmail}</p>
              <p className="italic text-gray-400 text-lg">
                Status:{" "}
                <span className=" text-gray-700 underline">{status}</span>
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleUpdateStatus}
              className=" px-4 py-2 bg-amber-400 text-white rounded-md"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSingleFood;
