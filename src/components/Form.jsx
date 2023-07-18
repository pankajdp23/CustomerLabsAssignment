import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styles from "./form.module.css";
import { toast } from "react-hot-toast";

const initialState = {
  first_name: "",
  last_name: "",
  gender: "",
  age: "",
  account_name: "",
  city: "",
  state: "",
};

// eslint-disable-next-line react/prop-types
const Form = ({ clickHandler }) => {
  const [segment, setSegment] = useState("");
  const [segmentName, setSegmentName] = useState("");
  const [input, setInput] = useState(initialState);

  const handleChange = (event) => {
    setSegment(event.target.value);
  };

  const handleSegmentName = (event) => {
    setSegmentName(event.target.value);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const newSchemaHandler = () => {
    setSegment("");
    setSegmentName("");
  };

  const saveSegmentHandler = async () => {
   try {
    const { data } = await axios.post(
        "https://webhook.site/3f2a9b8d-2ca2-4b43-9aad-2eff214c6bef",
        {
          segment_name: segmentName,
          schema: [
            { first_name: input.first_name },
            { last_name: input.last_name },
            { gender: input.gender },
            { age: input.age },
            { account_name: input.account_name },
            { city: input.city },
            { state: input.state },
          ],
        }
      );
      console.log(data);
      setInput(initialState);
      toast.success("Data Added Successfully");
      setSegment("");
      setSegmentName("");
   } catch (error) {
    toast.error(error.message);
   }
  };

  function pageControl() {
    if (segment == 1) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="First Name"
            name="first_name"
            type="text"
            value={input.first_name}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 2) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="Last Name"
            name="last_name"
            type="text"
            value={input.last_name}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 3) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="Gender"
            name="gender"
            type="text"
            value={input.gender}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 4) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="Age"
            name="age"
            type="number"
            value={input.age}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 5) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="Account Name"
            name="account_name"
            type="text"
            value={input.account_name}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 6) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="City"
            name="city"
            type="text"
            value={input.city}
            onChange={handleInput}
          />
        </div>
      );
    } else if (segment == 7) {
      return (
        <div>
          <TextField
            id="outlined-password-input"
            label="State"
            name="state"
            type="text"
            value={input.state}
            onChange={handleInput}
          />
        </div>
      );
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Typography>Enter the name of the Segment</Typography>
        <TextField
          id="outlined-password-input"
          label="Name of the segment"
          type="text"
          value={segmentName}
          onChange={handleSegmentName}
          style={{marginTop: 15, width:200}}
        />
        <Box style={{marginTop: 15, marginBottom:15}}>
          <FormControl size="small">
            <InputLabel id="demo-simple-select-label">Add schema to the segment</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={segment}
              label="Add schema to the segment"
              onChange={handleChange}
              SelectDisplayProps={{ style: { width: 200 }}}
            >
              <MenuItem value={1}>First Name</MenuItem>
              <MenuItem value={2}>Last Name</MenuItem>
              <MenuItem value={3}>Gender</MenuItem>
              <MenuItem value={4}>Age</MenuItem>
              <MenuItem value={5}>Account Name</MenuItem>
              <MenuItem value={6}>City</MenuItem>
              <MenuItem value={7}>State</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {pageControl()}
        <Link  style={{marginTop: 15}} onClick={newSchemaHandler}>+Add new schema</Link>
        <div style={{marginTop: 15}}>
          <Button variant="contained" onClick={saveSegmentHandler} style={{textTransform: "none"}}>
            Save Segment
          </Button>
          <Button style={{margin: 10, textTransform: "none"}} variant="outlined" onClick={clickHandler}>Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default Form;
