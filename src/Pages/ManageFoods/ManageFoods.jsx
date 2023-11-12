import { Link } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";
// import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useQueryData from "../../Hooks/useQueryData";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";

const ManageFoods = () => {
  const { user } = useProvider();
  // const [foodData, setFoodData] = useState(null);

  const {
    data: foodData,
    isLoading,
    refetch,
  } = useQueryData(
    "getFoodWithEmail",
    `https://food-sharing-community-server-three.vercel.app/manage/${user?.email}`
  );

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }

  console.log(foodData);
  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://food-sharing-community-server-three.vercel.app/foods/${id}`
          )
          .then((data) => {
            console.log(data.data.deletedCount);
            if (data.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name & Image</th>
              <th>Pickup Location</th>
              <th>foodQuantity</th>
              <th>Expired Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {foodData?.map((food) => {
              const {
                _id,
                foodImageURL,
                foodName,
                foodQuantity,
                pickupLocation,
                expiredDateTime,
              } = food;
              return (
                <tr key={_id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={foodImageURL}
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-lg">
                      {pickupLocation}
                    </span>
                  </td>
                  <td>{foodQuantity} Servings</td>
                  <td>{expiredDateTime}</td>
                  <th>
                    <Link to={`/updateFood/${_id}`}>
                      <button className="btn btn-ghost btn-xs">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDeleteFood(_id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                    <Link to={`/manage/${_id}`}>
                      <button className="btn btn-ghost btn-xs">
                        Manage Food
                      </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageFoods;
