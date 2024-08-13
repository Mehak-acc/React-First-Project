import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import Navbar from "../components/Navbar";

function Profile() {
  const { user } = useContext(StoreContext);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="user-card">
          <div className="user-card-img">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
              alt=""
            />
          </div>
          <div className="user-card-info">
            <h2>{user?.username}</h2>
            <p>{user?.email}</p>
            <p>{user?.user_uuid_id}</p>
            <Link to="/profile/update">
              <button className="backbtn">Edit Profile </button>
            </Link>
            <div className="details">
              <p>
                <span>User-ID : </span> {user?.id}
              </p>
              <p>
                <span>CreatedAt :</span> {user?.createdAt}
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vestibulum dignissim, lacus sit amet dapibus
                pellentesque, dolor erat semper tellus, eget imperdiet ante leo
                nec libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
