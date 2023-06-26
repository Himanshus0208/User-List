import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import ShowUser from "./Components/ShowUser/ShowUser";
import UserProvider from "./Components/Store/UserProvider";
import 'bootstrap/dist/css/bootstrap.css';


// const defaultUsers = [
//   { id: "1", fName: "Himanshu", lName: "Sharma", dob: "01/01/1990" },
//   { id: "2", fName: "Manju", lName: "BD", dob: "02/02/1995" },
//   { id: "3", fName: "Nandan", lName: "N", dob: "03/03/1985" },
// ];
function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/home/addUser" Component={AddUser} />
          <Route path="/home/showUser" Component={ShowUser} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
