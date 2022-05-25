import React ,{useContext}from 'react'
import { UserContext } from '../../context/userContext';

const Notifications = () => {
  const decode = useContext(UserContext);
  console.log('====================================');
  console.log(decode);
  console.log('====================================');
  return <a href="http://localhost:3000/">dashboard</a>;
}

export default Notifications