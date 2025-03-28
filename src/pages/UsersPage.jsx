import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { getUsers, deleteUser } from "../services/api";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  
  const fetchUsers = async () => {
    try {
      const res = await getUsers(page);
      setUsers(res.data.data);
    } catch (err) {
      setError("Failed to load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
      alert("User Deleted Successfully!");
    } catch (err) {
      alert("Error deleting user.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Users List</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="d-flex flex-wrap">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default UsersPage;
