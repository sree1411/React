import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//layouts//
import Topbar from "./Components/_layouts/Topbar";
import Footer from './Components/_layouts/Footer';
import AddUser from './Components/_layouts/AddUser';
import UpdateUser from './Components/_layouts/UpdateUser';
import TableUser from './Components/_layouts/TableUser';


export default function App() {
  return (
    <> 
      <h1> this the development branch code </h1>
      <Topbar/>

     <div className='main'>
 
     <Container>
      
      <Row>
        <Col xs={12} md={6}>
        <AddUser/>
        </Col>
        <Col xs={12} md={6}>
        <UpdateUser/>
        </Col>

        <Col xs={12} md={12}>
          <TableUser/>
        </Col>
      </Row>
      </Container>

     </div>
    <Footer/>
      
      <h1> footer part of the code in the 1001</h1>
      <p> 2020 copy right claims to the company</p>
   </>
  )
}
