import React from "react";
import scss from "./Admin.module.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.admin}>
      <div className="container">
        <div className={scss.content}>
          <IconButton onClick={() => navigate("/admin ")}>
            <AdminPanelSettingsIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
