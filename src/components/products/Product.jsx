import React, { useEffect } from "react";
import scss from "./ProductList.module.scss";
import { useProduct } from "../context/ProductContext";
import ProductList from "./ProductList";
import BasicPagination from "../pagination/Pagination";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Product = () => {
  const {
    readProduct,
    handlePage,
    expensiveProduct,
    averageProduct,
    cheapProduct,
  } = useProduct();
  useEffect(() => {
    readProduct();
  }, []);

  const [alignment, setAlignment] = React.useState("Technology");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <section className={scss.product}>
      <div className="container">
        <div className={scss.sort}>
          <div>
            <br />
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                onClick={() => expensiveProduct()}
                value="headphone"
              >
                Expensive
              </ToggleButton>
              <ToggleButton onClick={() => averageProduct()} value="gadget">
                average
              </ToggleButton>
              <ToggleButton onClick={() => cheapProduct()} value="watch">
                cheap
              </ToggleButton>
              <ToggleButton onClick={() => readProduct()} value="all">
                All
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={scss.content}>
          {handlePage() ? (
            handlePage().map((el, index) => (
              <ProductList item={el} key={index} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
      <BasicPagination />
    </section>
  );
};

export default Product;
