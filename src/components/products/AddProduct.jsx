import { Container } from "@mui/material";
import React from "react";
import Form from "../forms/Form";

const AddProduct = () => {
  return (
    <div>
      <Container>
        <Form esEdit={false} />
      </Container>
    </div>
  );
};

export default AddProduct;
