import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall(props) {
  const [category, setCategory] = useState('')
  console.log(props)
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 250, minHeight:10 }} size="small">
      <InputLabel id="demo-select-small">Category</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        {props.categories.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
          > {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}