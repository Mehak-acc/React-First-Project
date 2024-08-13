import { Box } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { createUser,fetchUsersByUuid } from '../api/user';
import { StoreContext } from "../store";
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { user, setUser } = useContext(StoreContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const userId = localStorage.getItem("userUuidId");
    if (!user && userId) {
      fetchUsersByUuid(userId)
        .then((res) => {
          setUser(res);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the check
        });
    } else {
      setLoading(false); // No need to fetch, set loading to false
    }
  }, [user, setUser, navigate]);

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    if (usernameValue.length < 3) {
      setUsernameError("Username must be at least 3 characters");
    } else {
      setUsernameError("");
    }
    setUsername(usernameValue);
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = e.target.value;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
    setPassword(passwordValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usernameError && !emailError && !passwordError) {
      try {
        const user = await createUser({username, email, password});
        if (user) {
          console.log("Registered successfully!");
          navigate("/")
        } else {
          setRegisterError("Failed to register");
        }
      } catch (e) {
        console.error(e);
        setRegisterError("Failed to register");
      }
    }
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <Box sx={{marginTop:"10px"}}><p>Please register yourself</p></Box>
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
        <input type="submit" value="Register" />
        <div className="links">
          <Link to="/">Already have an account? Login Here</Link>
        </div>
      </form>
    </>
  )
}

export default RegisterPage