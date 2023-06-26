import React, { createContext } from 'react';

const UserContext= createContext({
    users:[],
    addUser:(user)=>{}
});

export default UserContext;