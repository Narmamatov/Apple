import React, { useState } from "react";
import scss from "./Register.module.scss";
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

const Register = () => {
  const { register, error } = useAuth();
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
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

  const handleRegister = () => {
    register(email, password, name, surName);
  };

  return (
    <div className={scss.register}>
      <div className={scss.content}>
        {error && (
          <Alert severity="error">
            {error.split("").slice(10, error.length).join("")}
          </Alert>
        )}
        <h1>Регистрация</h1>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={scss.inputs}
          id="Name"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setSurName(e.target.value)}
          className={scss.inputs}
          id="surName"
          label="SurName"
          variant="outlined"
        />
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
          onClick={handleRegister}
          className={scss.btnSignUp}
          variant="contained"
        >
          Зарегистрироваться
        </Button>
        <Button className={scss.btnSignIn} variant="outlined">
          Вход через Google {<GoogleIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Register;
