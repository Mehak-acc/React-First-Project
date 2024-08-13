import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { StoreContext } from "../store";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { updateUser } from "../api/user";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMediaQuerySizes } from "../utils/mediaQuery";
import { Visibility } from "@mui/icons-material";

function New() {
  const { isSmall } = useMediaQuerySizes();
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [oldPasswordShown, setOldPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const togglePasswordVisiblity = (passwordType) => {
    if (passwordType === "oldPassword") {
      setOldPasswordShown(!oldPasswordShown);
    } else if (passwordType === "newPassword") {
      setNewPasswordShown(!newPasswordShown);
    }
  };
  const { user, setUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: user?.username,
      email: user?.email,
      oldPassword: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      try {
        if (values.oldPassword && values.newPassword) {
          if (user?.password === values.oldPassword) {
            setPasswordMatched(true);
            if (values.newPassword) {
              const data = await updateUser(user.id, {
                password: values.newPassword,
              });
              
              if (data) {
                toast.success("Password Updated Successfully");
                setUser(data);
                navigate("/profile");
                return;
              }
              toast.error("Something went wrong");
            }
          } else {
            toast.error("Old password is incorrect");
          }
        } else {
          const data = await updateUser(user?.id, values);
          const successMessage = "Updated Successfully";
          console.log(data);
          if (data) {
            toast.success(successMessage);
            setUser(data);
            navigate("/profile");
            return;
          }
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }
    },
  });

  // const passwordFormik = useFormik({
  //   initialValues: {
  //     oldPassword: "",
  //     newPassword: "",
  //   },
  //   onSubmit: async (values) => {
  //     try {

  //     } catch (error) {
  //       toast.error(error.message || "Something went wrong");
  //     }
  //   },
  // });

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" theme="dark" />
      <Box
        sx={{
          background: "#80808094",
          textAlign: "center",
          color: "white",
          margin: "30px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <ArrowBackIcon sx={{ color: "white" }} onClick={() => navigate(-1)} />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: isSmall ? "column" : "unset" }}
        >
          <Box
            sx={{
              borderRight: isSmall ? "none" : "2px solid white",
              padding: "30px",
            }}
          >
            <img
              className="profile-img"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
              alt=""
            />
            <h2>{user?.username}</h2>
            <p>{user?.email}</p>
          </Box>
          <Box
            sx={{
              borderRight: isSmall ? "none" : "2px solid white",
              display: "flex",
              padding: "30px",
              width: "100%",
              flex: "1",
            }}
          >
            <form onSubmit={formik.handleSubmit} className="forminputs">
              <div className="profile-heading-div">
                <h2>Profile Update</h2>
                <Box
                  sx={{
                    marginTop: "30px",
                    fontSize: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="settings">
                    ID: <span> {user?.id} </span>
                  </p>
                  <p className="settings">
                    UUID: <span> {user?.user_uuid_id} </span>
                  </p>
                </Box>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginTop: "20px",
                }}
              >
                <label>Username</label>
                <input
                  type="text"
                  placeholder="User Name"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username && (
                  <div style={{ color: "red" }}>{formik.errors.username}</div>
                )}
              </Box>
              {/* email */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
              </Box>
              <input type="submit" className="updatebtn" value="Update" />
            </form>
          </Box>
          <Box sx={{ flex: "1", padding: "30px" }}>
            <form onSubmit={formik.handleSubmit} className="forminputs">
              <h2>Update Password</h2>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <label>Old Password</label>
                <input
                  type={oldPasswordShown ? "text" : "password"}
                  placeholder="Old Password"
                  {...formik.getFieldProps("oldPassword")}
                />
                <Visibility
                  onClick={() => togglePasswordVisiblity("oldPassword")}
                  sx={{
                    color: "grey",
                    position: "absolute",
                    top: "34px",
                    right: "10px",
                    transform: "translateY(10px)",
                    cursor: "pointer",
                  }}
                />
                {passwordMatched && (
                  <div style={{ color: "green" }}>
                    Password matched correctly
                  </div>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  position: "relative",
                }}
              >
                <label>New Password</label>
                <input
                  type={newPasswordShown ? "text" : "password"}
                  placeholder="New Password"
                  {...formik.getFieldProps("newPassword")}
                />
                <Visibility
                  onClick={() => togglePasswordVisiblity("newPassword")}
                  sx={{
                    color: "grey",
                    position: "absolute",
                    top: "34px",
                    right: "10px",
                    transform: "translateY(10px)",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <input
                type="submit"
                className="updatebtn"
                value="Update Password"
              />
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default New;
