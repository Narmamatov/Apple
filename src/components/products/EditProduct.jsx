import { Container } from "@mui/material";
import React from "react";
import Form from "../forms/Form";

const EditProduct = () => {
  return (
    <div>
      <Container>
        <Form esEdit={true} />
      </Container>
    </div>
  );
};

export default EditProduct;
