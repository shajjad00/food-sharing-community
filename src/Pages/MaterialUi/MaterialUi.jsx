import { Box, Rating } from "@mui/material";
import { useState } from "react";

const MaterialUi = () => {
  const [value, setValue] = useState(1.5);
  const [hover, setHover] = useState("");

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "200px",
          alignItems: "center",
        }}
      >
        <Rating
          name=""
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log("event", event);
            console.log("newValue", newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        ></Rating>
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </>
  );
};

export default MaterialUi;
