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

  // const columns = [
  //   {
  //     Header: "Food Name",
  //     accessor: "foodName",
  //   },
  //   {
  //     Header: "Food Image URL",
  //     accessor: "foodImageURL",
  //   },
  //   {
  //     Header: "Food Quantity",
  //     accessor: "foodQuantity",
  //   },
  //   {
  //     Header: "Pickup Location",
  //     accessor: "pickupLocation",
  //   },
  //   {
  //     Header: "Expired DateTime",
  //     accessor: "expiredDateTime",
  //   },
  //   {
  //     Header: "Donator Name",
  //     accessor: "donatorName",
  //   },
  //   {
  //     Header: "Donator Image URL",
  //     accessor: "donatorImageURL",
  //   },
  // ];

  // const { data, isLoading } = useQueryData(
  //   "manageFoods",
  //   `http://localhost:5001/manage/${user?.email}`
  // );

  // useEffect(() => {
  //   fetch(`http://localhost:5001/manage/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFoodData(data);
  //     });
  // }, [user?.email]);

  const {
    data: foodData,
    isLoading,
    refetch,
  } = useQueryData(
    "getFoodWithEmail",
    `http://localhost:5001/manage/${user?.email}`
  );

  if (isLoading) {
    return <LottieAnimation></LottieAnimation>;
  }

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
        axios.delete(`http://localhost:5001/foods/${id}`).then((data) => {
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
            {/* row 1 */}
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
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageFoods;
