import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../context/ProductContext";

export default function ProductList({ item, index }) {
  const { deleteProduct } = useProduct();
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <br />
      <Typography gutterBottom variant="h5" component="div">
        <div key={index}>{item.title}</div>
      </Typography>
      <img
        style={{ maxWidth: "300px", width: "100%" }}
        src={item.image}
        alt="Image of product"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.price} cом
          <br />
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <button
          size="small"
          key={index}
          onClick={() => deleteProduct(item._id)}
        >
          Delete
        </button>
      </CardActions>
    </Card>
  );
}
