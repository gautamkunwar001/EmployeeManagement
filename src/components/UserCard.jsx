import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card m-2 p-3" style={{ width: "18rem" }}>
      <img src={user.avatar} className="card-img-top" alt={user.first_name} />
      <div className="card-body">
        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
        <p className="card-text">{user.email}</p>
        <button className="btn btn-primary me-2" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
