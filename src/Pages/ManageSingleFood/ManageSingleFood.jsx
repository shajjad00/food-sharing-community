import { useParams } from "react-router-dom";
import useQueryData from "../../Hooks/useQueryData";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";
import axios from "axios";

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

  const {
    requesterName,
    requesterImage,
    requesterEmail,
    requestedDate,
    status,
  } = data;

  console.log(status);
  const handleUpdateStatus = (e) => {
    const updateStatus = e.target.value;
    console.log(updateStatus);
    axios
      .put(`http://localhost:5001/requestedFood/${id}`, {
        status: updateStatus,
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <>
      <div
        // key={_id}
        className="flex py-6 px-3 shadow-lg rounded-md bg-gray-100 max-w-lg mx-auto"
      >
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
            </div>
          </div>

          <div>
            <form>
              <select
                onChange={handleUpdateStatus}
                defaultValue={status}
                name="status"
                className="font-semibold border border-green-500 outline-none px-8 py-2 rounded-md text-green-500 "
              >
                <option value="Pending">{status}</option>
                <option
                  className="w-full"
                  value="Delivered"
                >
                  Delivered
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSingleFood;
