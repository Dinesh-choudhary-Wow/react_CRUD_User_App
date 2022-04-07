import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1> Home page </h1>
        <table className="table table-dark table-hover border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary m-1" to={`users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary m-2"
                    to={`users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                    to=""
                  >
                    Delete
                  </Link>
                </td>
                ;
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
