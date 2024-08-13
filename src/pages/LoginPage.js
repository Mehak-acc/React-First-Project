import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchUsers, fetchUsersByUuid } from "../api/user";
import { StoreContext } from "../store";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { user, setUser } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
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
    if (!emailError && !passwordError) {
      try {
        const userDetails = await fetchUsers(email);
        if (userDetails && userDetails?.password === password) {
          setUser(userDetails);
          localStorage.setItem("userUuidId", userDetails.user_uuid_id);
          console.log("User UUID ID:", userDetails.user_uuid_id);
          navigate("/");
        } else {
          setLoginError("Invalid email or password");
        }
      } catch (error) {
        console.error(error);
        setLoginError("Error logging in");
      }
    }
  };
  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while checking authentication
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <p>Please log in</p>
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
        {loginError && <div style={{ color: "red" }}>{loginError}</div>}
        <input type="submit" value="Log In" />
        <div className="links">
          <Link to="/register">Don't have an account? Register Here</Link>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
