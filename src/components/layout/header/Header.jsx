import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AdminPage from "../../admin/AdminPage";
import { styled } from "@mui/material/styles";
import { IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { AccountCircle } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  fontSize: "13.5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { searchProduct } = useProduct();

  return (
    <header className={scss.header}>
      <div className={scss.content}>
        <nav>
          <AppleIcon />
          <Link to="/product">
            <h1>Store</h1>
          </Link>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>iPhone</h1>
          <h1>Watch</h1>
          <h1>Vision</h1>
          <h1>TV & Home</h1>
          <h1>Entertainment</h1>
          <h1>Accessories</h1>
          <h1>Support</h1>
          <AdminPage />
          <Search sx={{ background: "#F5F5F7" }}>
            <SearchIconWrapper>
              <SearchIcon className={scss.search_icon} />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => searchProduct(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <WorkOutlineIcon />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/login">
                <MenuItem onClick={handleClose}>Sign In</MenuItem>
              </Link>
              <Link to="/register">
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Link>
            </Menu>
          </div>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
