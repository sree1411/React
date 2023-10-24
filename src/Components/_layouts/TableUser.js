import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import axios from "axios";

export default function TableUser() {

  const [users, setUsers] = useState([]);


  const deletuser =(id)=>{
    axios
      .delete(`http://localhost:5007/employee ${id}`)
      .then((res) => {
        getUser();
      })
      .catch(() => {});
  }


const getUser = ()=>{
  axios
      .get('http://localhost:5007/employee')
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch(() => {});
  }
}

useEffect(()=>{
  getUser()
},[])

  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
          <th>Name</th>
          <th>age</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>

      {
        users.map((user,i)=>(
          <tr>
             <td> {i+1}</td>
            <td> {user.name}</td>
            <td> {user.age}</td>
            <td> {user.email}</td>
            <td> {user.phone}</td>
            <td>   <Button> edit </Button>
                   <Button onClick={()=>{deletuser(user._id)}}> delete </Button>


              </td>
          </tr>
        ))
      }   
         
        
      </tbody>
    </Table>
     
    </>
  );

