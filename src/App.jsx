import Button from "@mui/material/Button";
import "./App.css";
import { useState } from "react";
import SegmentPopUp from "./components/SegmentPopUp";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div>
        <Button
          variant="outlined"
          onClick={clickHandler}
          style={{ textTransform: "none" }}
        >
          Save segment
        </Button>
      </div>
      {isOpen && <SegmentPopUp clickHandler={clickHandler} />}
    </>
  );
}

export default App;
