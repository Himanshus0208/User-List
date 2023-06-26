import { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
  users: [{ id: "1", fname: "Himanshu", lname: "Sharma", dob: "01/01/1990" }],
};

const userReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedUserList = [...state.users, action.user];
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
  const userContext = {
    users: userState.users,
    addUser: addUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
