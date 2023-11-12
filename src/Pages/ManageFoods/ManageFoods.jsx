import { Link } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";
// import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useQueryData from "../../Hooks/useQueryData";
import LottieAnimation from "../../Component/LottieAnimation/LottieAnimation";
// import FoodTable from "./FoodTable";
import { useMemo } from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

const Image = ({ value }) => {
  return (
    <>
      <img
        className="w-20 h-20 mx-auto rounded-xl"
        src={value}
        alt=""
      />
    </>
  );
};
Image.propTypes = {
  value: PropTypes.array,
};

const Manage = ({ value, refetch }) => {
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
      <Link to={`/updateFood/${value}`}>
        <button className="btn btn-ghost btn-xs">Edit</button>
      </Link>
      <button
        onClick={() => handleDeleteFood(value)}
        className="btn btn-ghost btn-xs"
      >
        Delete
      </button>
      <Link to={`/manage/${value}`}>
        <button className="btn btn-ghost btn-xs">Manage Food</button>
      </Link>
    </>
  );
};

Manage.propTypes = {
  value: PropTypes.array,
  refetch: PropTypes.any,
};

const ManageFoods = () => {
  const { user } = useProvider();
  // const [data, setFoodData] = useState(null);

  const { data, isLoading, refetch } = useQueryData(
    "getFoodWithEmail",
    `http://localhost:5001/manage/${user?.email}`
  );

  //table columns
  const columns = useMemo(
    () => [
      {
        Header: "Food Image",
        accessor: "foodImageURL",
        Cell: ({ cell: { value } }) => <Image value={value} />,
      },
      {
        Header: "Name",
        accessor: "foodName",
      },
      {
        Header: "Quantity",
        accessor: "foodQuantity",
      },
      {
        Header: "Pickup Location",
        accessor: "pickupLocation",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Manage",
        accessor: "_id",
        Cell: ({ cell: { value } }) => (
          <Manage
            refetch={refetch}
            value={value}
          />
        ),
      },
    ],
    [refetch]
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

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
      {/* react table */}

      <table
        className="w-full text-center"
        style={{ marginTop: "20px" }}
      >
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr
              style={{ borderBottom: "1px solid #ddd" }}
              key={idx}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, idx) => (
                <th
                  className=" py-2 italic text-gray-700 text-xl"
                  key={idx}
                  {...column.getHeaderProps()}
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <>
                <tr
                  key={idx}
                  {...row.getRowProps()}
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  {row.cells.map((cell, idx) => (
                    <td
                      className="py-2 capitalize italic text-gray-500"
                      key={idx}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ManageFoods;
