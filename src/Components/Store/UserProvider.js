import { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
  users: [
    { id: "11", fname: "Himanshu", lname: "Sharma", dob: "1999-01-02" },
    { id: "12", fname: "Udit", lname: "Sharma", dob: "1999-01-02" },
    { id: "13", fname: "Disha", lname: "Sharma", dob: "1999-01-02" },
    { id: "14", fname: "Sunil", lname: "Sharma", dob: "1999-01-02" },
    { id: "15", fname: "Pratap", lname: "Sharma", dob: "1999-01-02" },
    { id: "16", fname: "Mohit", lname: "Sharma", dob: "1999-01-02" },
  ],
};

const userReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedUserList = [...state.users, action.user];
    return {
      users: updatedUserList,
    };
  }
  if (action.type === "DELETE") {
    const updatedUserList = state.users.filter((user) => {
      if (user.id !== action.id) {
        console.log(user);
        return user;
      }
    });
    return {
      users: updatedUserList,
    };
  }
  if (action.type === "EDIT") {
    let updatedUserObject = action.user;
    const updatedUserList = state.users.map((user) => {
      if(user.id === action.id){
        return updatedUserObject
      }
      return user;
    });
    return {
      users: updatedUserList,
    };
  }
  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, userDispatcher] = useReducer(userReducer, defaultUserState);

  const addUserHandler = (user) => {
    userDispatcher({ type: "ADD", user: user });
  };
  const removeUserHandler = (id) => {
    userDispatcher({ type: "DELETE", id: id });
  };
  const editUserHandler = (user,id) => {
    userDispatcher({ type: "EDIT", user: user, id: id });
  };
  const userContext = {
    users: userState.users,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    editUser: editUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
