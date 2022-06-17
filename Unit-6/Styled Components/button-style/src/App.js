import './App.css';
import Button from "@mui/material/Button"
import React from 'react';
import { InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import { Box } from '@mui/system';

function App() {

  const [buttVar, setButtVar] = React.useState("")

  const handleChange = (e) => {
    setButtVar(e.target.value)
  }

  return (
    <div className="App">
      <h1>Button Styling Using Material UI</h1>
      <Box sx={{display:"flex", alignItems:"center"}}>
        <h4>Please Select Button Styling: </h4>
      <FormControl sx={{minWidth:100, marginLeft:2}} color='secondary'>
      <InputLabel id="demo-simple-select-helper-label">Styling</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={ buttVar }
          label="Styling"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"contained"}>Primary</MenuItem>
          <MenuItem value={"outlined"}>Outlined</MenuItem>
          <MenuItem value={"text"}>Text</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <br />
      <Button variant={ buttVar } color="secondary">Hello World</Button>
      </div>
  );
}

export default App;
