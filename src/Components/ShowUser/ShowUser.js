import React from "react";
import "./ShowUser.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Store/user-context";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ShowUser = () => {
  const userCtx = useContext(UserContext);

  const clickHandler = () => {
    console.log("---showuser click handler");
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userCtx.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.dob}</td>
                  <td>
                    <BiSolidEdit />
                  </td>
                  <td>
                    <AiFillDelete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/home">
            <button className='button'type="button" onClick={clickHandler}>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
