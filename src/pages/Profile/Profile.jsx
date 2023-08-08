import React from "react";
import "./Profile.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";

const Profile = () => {
  return (
    <div className="profile-page">
      <div>
        <Heading title="Profile"/>
      </div>
      <div><NavBar /></div>
    </div>
  );
};

export default Profile;
