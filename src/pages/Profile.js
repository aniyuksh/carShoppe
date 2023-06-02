import React from "react";
import Navbar from "../components/navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="border border-gray-500 inline-block">
          <button>Profile</button>
          <button>Address</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
