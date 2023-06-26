import React from "react";
import "./ShowUser.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Store/user-context"; 
import { CiEdit } from "react-icons/ci";


const ShowUser = () => {

  const userCtx = useContext(UserContext);

  console.log(userCtx.users);

  const clickHandler = () => {
    console.log('---showuser click handler')
  };

  return (
    <>
      <div className="container">
        <div className="list-div">
          <h1>Showing User List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {userCtx.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.dob}</td>
                  <td><CiEdit/></td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/home">
            <button type="button" onClick={clickHandler}>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
