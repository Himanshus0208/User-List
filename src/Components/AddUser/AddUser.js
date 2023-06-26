import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./AddUser.css";
import UserContext from "../Store/user-context";

const AddUser = () => {
  const [user, setUser] = useState({
    id: "",
    fname: "",
    lname: "",
    dob: "",
  });
  const [added, setAdded] = useState(false);
  const userCtx = useContext(UserContext);

  const handleChange = (e) => {
    //let newUser = {...user,[e.target.name]: e.target.value }
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addToListHandler = () => {
    userCtx.addUser(user);
    setAdded(true);
  };
  return (
    <>
    
      {added ? (
        <div className="container">
          <h1>Add New User</h1>
          <form className="add-user-form">
            <p>User Added Succesfully</p>
            <Link to="/home">
              <button id="home-btn" type="button">
                Go Home
              </button>
            </Link>
          </form>
        </div>
      ) : (
        <div className="container">
          <h1>Add New User</h1>
          <form className="add-user-form">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                name="id"
                value={user.id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="fname"
                value={user.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lname"
                value={user.lname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dob"
                value={user.dob}
                onChange={handleChange}
              />
            </div>

            <button id="add-user-btn" type="button" onClick={addToListHandler}>
              Add to List
            </button>
            <Link to="/home">
              <button id="home-btn" type="button">
                Go Home
              </button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default AddUser;
