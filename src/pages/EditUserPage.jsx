import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { updateUser, getUsers } from "../services/api";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUsers(1);
      const found = res.data.data.find((u) => u.id === parseInt(id));
      if (found) setUser(found);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      alert("User Updated Successfully!");
      navigate("/users");
    } catch (err) {
      alert("Failed to update user.");
    }
  };


  

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Edit User</h2>
        <form className="w-50 mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input type="text" className="form-control" value={user.first_name} required onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input type="text" className="form-control" value={user.last_name} required onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={user.email} required onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditUserPage;


