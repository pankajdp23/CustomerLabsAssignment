import {
  AppBar,
  //   Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Form from "./Form";

// eslint-disable-next-line react/prop-types
const SegmentPopUp = ({ clickHandler }) => {


  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={clickHandler}
      >
        <AppBar sx={{ position: "relative" }} style={{height: 80}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={clickHandler}
              aria-label="close"
            >
              <p>X</p>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Saving Segment
            </Typography>
          </Toolbar>
        </AppBar>
        <Form clickHandler={clickHandler} />
      </Dialog>
    </div>
  );
};

export default SegmentPopUp;
