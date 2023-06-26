import { useState } from "react";
import ShowUser from "../ShowUser/ShowUser";
import AddUser from "../AddUser/AddUser";
import { Link } from "react-router-dom";
import './Home.css'
const defaultUsers = [
  { id: "1", fName: "Himanshu", lName: "Sharma", dob: "01/01/1990" },
  { id: "2", fName: "Manju", lName: "BD", dob: "02/02/1995" },
  { id: "3", fName: "Nandan", lName: "N", dob: "03/03/1985" },
];

const Home = () => {
  const [homePage, setHomePage] = useState(true);
  const [addUserPage, setaddUserPage] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const addUserHandler = () => {
    setHomePage(false);
    setaddUserPage(true);
  };
  const showUserHandler = () => {
    setHomePage(false);
    setShowUser(true);
  };

  console.log("showuser", showUser);

  return (
    <>
      {/* {homePage ? (
        <div className="container">
          <h1>Dash Board</h1>
          <form className="login-form">
            <label htmlFor="button">Add User:</label>
            <button type="button" onClick={addUserHandler}>
              Add User
            </button>
            <label htmlFor="button">User List:</label>
            <button type="button" onClick={showUserHandler}>
              Show User
            </button>
          </form>
        </div>
      ) : showUser ? (
        <ShowUser users={defaultUsers} />
      ) : (
        <AddUser />
      )} */}

      {homePage && (
        <div className="container">
          <h1>Dash Board</h1>
          <form className="login-form">
            <label htmlFor="button">Add User:</label>
            <Link to="/home/addUser">
              <button id='home-add-user-btn' type="button" onClick={addUserHandler}>
                Add User
              </button>
            </Link>
            <label htmlFor="button">User List:</label>
            <Link to={`/home/showUser`}>
              <button id='home-show-user-btn' type="button" onClick={showUserHandler}>
                Show User
              </button>
            </Link>
            
            
          </form>
        </div>
      )}
      {addUserPage && <AddUser />}

      {showUser && <ShowUser users={defaultUsers} />}
    </>
  );
};

export default Home;
