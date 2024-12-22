import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../layout/pages/about/About";
import Home from "../layout/pages/home/Home";
import AdminPage from "../admin/AdminPage";
import Product from "../products/Product";
import Register from "../authentification/register/Register";
import Login from "../authentification/login/Login";

const ADMIN_ROUTES = [
  {
    link: "/about",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/product",
    element: <Product />,
    id: 3,
  },
];

const MainRouter = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/edit/:id",
      element: <Home />,
      id: 1,
    },
    {
      link: "/admin",
      element: <About />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} key={el.id} element={el.element} />
      ))}
      {ADMIN_ROUTES.map((el) => (
        <Route path={el.link} key={el.id} element={el.element} />
      ))}
    </Routes>
  );
};

export default MainRouter;
