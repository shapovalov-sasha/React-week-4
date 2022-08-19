import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function AddForm(props) {
  const [formState, setFormState] = useState({
    title: "",
    count: 0,
    details: "",
  });

  const handleChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAdd(formState);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{
        border: "1px solid grey",
        padding: 10,
        margin: "10px 0",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        value={formState.title}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="title"
        onChange={handleChange}
      />
      <TextField
        value={formState.count}
        id="filled-basic"
        label="Count"
        variant="outlined"
        type="number"
        name="count"
        onChange={handleChange}
      />
      <TextField
        value={formState.details}
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        name="details"
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" startIcon={<Add />}>
        Add
      </Button>
    </Box>
  );
}
