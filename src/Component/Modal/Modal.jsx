import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const Modal = () => {
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
            Are you sure you want to submit this?
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
        <button onClick={() => setOpen(false)}>Cancel</button>
        <button
          autoFocus
          onClick={() => setOpen(false)}
        >
          Submit
        </button>
      </Dialog>
    </div>
  );
};

export default Modal;
