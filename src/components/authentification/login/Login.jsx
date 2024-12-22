import React, { useState } from "react";
import scss from "./Login.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={scss.register}>
      <div className={scss.content}>
        {error && (
          <Alert severity="error">
            {error.split("").slice(10, error.length).join("")}
          </Alert>
        )}
        <h1>Добро пожаловать</h1>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={scss.inputs}
          id="email"
          label="Email"
          variant="outlined"
        />

        <FormControl className={scss.inputs} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          onClick={(e) => e}
          className={scss.btnSignUp}
          variant="contained"
        >
          Войти
        </Button>
        <Button className={scss.btnSignIn} variant="outlined">
          Вход через Google {<GoogleIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Login;
