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

const Modal = ({ food }) => {
  const { user } = useProvider();
  console.log(user);
  const {
    foodImageURL,
    foodName,
    donatorImageURL,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
  } = food;
  const [open, setOpen] = useState(false);
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
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <div className="flex items-center justify-center">
              <div className="mx-auto w-full max-w-[570px] bg-gray-300 p-6 rounded">
                <label className="mb-5 block text-center text-xl font-semibold text-gray-800 sm:text-xl">
                  Update Product Details
                </label>
                <form
                //    onSubmit={handleUpdateProduct}
                >
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Food Name
                    </label>
                    <input
                      disabled
                      type="text"
                      defaultValue={foodName}
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="foodImage"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Food Image Url
                    </label>
                    <input
                      disabled
                      type="text"
                      defaultValue={foodImageURL}
                      name="foodImage"
                      id="foodImage"
                      placeholder="Enter your Brand Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="image"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Image Url
                    </label>
                    <input
                      type="text"
                      //   defaultValue={image}
                      name="image"
                      id="image"
                      placeholder="Enter your Image Url"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                    />
                  </div>

                  <div className="mb-5 pt-3">
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label
                            htmlFor="productType"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            product Type
                          </label>
                          <input
                            type="text"
                            name="productType"
                            id="productType"
                            placeholder="Enter Category"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <label
                          htmlFor="rating"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Rating
                        </label>
                        <div className="mb-5">
                          <input
                            type="text"
                            // defaultValue={rating}
                            name="rating"
                            id="rating"
                            placeholder="Enter Rating"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label
                            htmlFor="price"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            // defaultValue={price}
                            name="price"
                            id="price"
                            placeholder="Enter Price"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#999] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex ">
                    <button className="hover:shadow-form hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Cancel
                    </button>
                    <button className="hover:shadow-form hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Request
                    </button>
                  </div>
                </form>
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
