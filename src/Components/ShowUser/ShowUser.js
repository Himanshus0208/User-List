import React from "react";
import "./ShowUser.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../Store/user-context";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import EditUser from "../EditUser/EditUser";

const ShowUser = () => {
  const userCtx = useContext(UserContext);

  const [toBeEditedUser, setToBeEditedUser] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const clickHandler = (id) => {
    userCtx.removeUser(id);
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
              {userCtx.users.length == 0 ? (
                <p>No users to show</p>
              ) : (
                userCtx.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>
                      <BiSolidEdit
                        onClick={() => {
                          setToBeEditedUser(user)
                          handleShow();
                        }}
                      />
                    </td>
                    <td>
                      <AiFillDelete
                        onClick={clickHandler.bind(null, user.id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <Link to="/home">
            <button className="button" type="button">
              Go Home
            </button>
          </Link>
        </div>
      </div>
      <EditUser show={show} handleClose={handleClose} toBeEditedUser={toBeEditedUser} />
    </>
  );
};

export default ShowUser;
