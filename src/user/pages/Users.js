import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{id:"u1", 
                name:"Sam", 
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Scarborough%2C_North_Yorkshire._Panorama_%282_of_2%29._By_Thomas_Tolkien_%287983660989%29.jpg/640px-Scarborough%2C_North_Yorkshire._Panorama_%282_of_2%29._By_Thomas_Tolkien_%287983660989%29.jpg",
                places: 3 }];

  return <UsersList items={USERS}/>;
    
  
};


export default Users;
