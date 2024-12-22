import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useProduct } from "../context/ProductContext";

export default function BasicPagination() {
  const { count, setPage } = useProduct();
  function handlePagination(p, n) {
    setPage(n);
  }
  return (
    <Stack spacing={2}>
      <Pagination onChange={handlePagination} count={count} color="primary" />
    </Stack>
  );
}
