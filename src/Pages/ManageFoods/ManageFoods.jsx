import { Link } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";
import { useEffect, useState } from "react";
const ManageFoods = () => {
  const { user } = useProvider();
  const [foodData, setFoodData] = useState(null);
  console.log(user);

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

  useEffect(() => {
    fetch(`http://localhost:5001/manage/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      });
  }, [user?.email]);

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
                    <button className="btn btn-ghost btn-xs">Delete</button>
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
