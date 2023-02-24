import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "/api/v1/users/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setUsers(res))
      .catch(() => navigate("/"));
  }, []);

  const allUsers = users.map((user, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{user.first_name}</h5>
          <Link to={`/users/${user.id}`} className="btn custom-button">
            View User
          </Link>
        </div>
      </div>
    </div>
  ));
  const noUser = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No user yet.
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Users for every occasion</h1>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="row">
            {users.length > 0 ? allUsers : noUser}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );

};

export default Users;