import React, { useState } from "react";
import scss from "./Form.module.scss";
import { Button, FormControl, TextField } from "@mui/material";
import { useProduct } from "../context/ProductContext";

const initialObject = {
  title: "",
  image: "",
  price: "",
  description: "",
  category: "",
};
const Form = ({ isEdit }) => {
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initialObject);

  function handleInput(e) {
    if (e.target.value === "price") {
      let obj = { ...inputValues, [e.target.value]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  const handlerAdd = () => {
    addProduct(inputValues);
    setInputValues(initialObject);
  };

  return (
    <div className={scss.form}>
      <div className={scss.content}>
        <FormControl className={scss.form_control} color="success">
          <TextField
            onChange={handleInput}
            value={inputValues.title}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="title"
            variant="outlined"
            name="title"
            fullWidth
          />
          <TextField
            onChange={handleInput}
            value={inputValues.image}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="image"
            variant="outlined"
            name="image"
            fullWidth
          />
          <TextField
            onChange={handleInput}
            value={inputValues.price}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="price"
            variant="outlined"
            name="price"
            fullWidth
          />
          <TextField
            onChange={handleInput}
            value={inputValues.description}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="descriprion"
            variant="outlined"
            name="description"
            fullWidth
          />
          <TextField
            onChange={handleInput}
            value={inputValues.category}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="category"
            variant="outlined"
            name="category"
            fullWidth
          />
          {isEdit ? (
            <Button className={scss.btn} variant="contained">
              Save
            </Button>
          ) : (
            <Button
              onClick={handlerAdd}
              className={scss.btn}
              variant="contained"
            >
              Add
            </Button>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default Form;
