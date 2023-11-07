import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import useProvider from "../../Hooks/useProvider";
import axios from "axios";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import toast from "react-hot-toast";

const Modal = ({ food }) => {
  const [open, setOpen] = useState(false);
  const { user, loading } = useProvider();
  const currentDate = new Date().toLocaleDateString();

  if (loading) {
    return <LottieAnimation></LottieAnimation>;
  }
  const { displayName, email, photoURL } = user;
  const {
    foodImageURL,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    _id,
  } = food;

  const handleRequestedProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const donatedMoney = form.donatedMoney.value;
    const additionalNotes = form.additionalNotes.value;
    const requestedDate = form.requestedDate.value;

    const requestedFoodData = {
      _id,
      foodImageURL,
      foodName,
      requesterImage: photoURL,
      requesterName: displayName,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donatedMoney,
      requestedDate,
      requesterEmail: email,
    };
    console.log(requestedDate);
    axios
      .post(`http://localhost:5001/requestedFood`, requestedFoodData)
      .then((data) => {
        if (data.data?.insertedId) {
          toast.success("Request Successful");
        }
      });
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className=" px-10 mt-4 py-2 bg-green-500 font-semibold bottom-2 left-2 rounded-md text-white"
      >
        Request
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle
          id="dialog-title "
          className="text-center text-3xl font-bold italic text-gray-400"
        >
          Submit the Request
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <div className="flex items-center justify-center">
              <div className="mx-auto w-full max-w-[570px] bg-gray-200 p-6 rounded-md">
                <label className="mb-5 block text-center text-xl font-semibold text-gray-500 sm:text-xl italic">
                  Update Product Details
                </label>
                <form onSubmit={handleRequestedProduct}>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-gray-700"
                    >
                      Donation Money
                    </label>
                    <input
                      type="number"
                      name="donatedMoney"
                      placeholder="$100"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="foodImage"
                      className="mb-3 block text-base font-medium text-gray-700"
                    >
                      Additional Notes
                    </label>
                    <input
                      type="text"
                      defaultValue={additionalNotes}
                      name="additionalNotes"
                      placeholder="Enter Additional Notes"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="foodImage"
                      className="mb-3 block text-base font-medium text-gray-700"
                    >
                      Requested Date
                    </label>
                    <input
                      type="text"
                      disabled
                      defaultValue={currentDate}
                      name="requestedDate"
                      placeholder="Enter Additional Notes"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>

                  {/* button */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="hover:shadow-form hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-2 px-8 lg:px-20 text-center text-base font-semibold text-white outline-none"
                    >
                      Request
                    </button>
                  </div>
                </form>
                <button
                  onClick={() => setOpen(false)}
                  className="hover:shadow-form mt-4 hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-2 px-8 lg:px-20 text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  food: PropTypes.object,
};

export default Modal;
