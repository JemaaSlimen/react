// /*import React from 'react';


import { Button,  Card,  CardGroup,  Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState, useEffect,useRef } from "react";


const De = props => {
  let [namee, setNamee] = useState("imagin");
  // we declare the input inside the variable
  let nameeRef = useRef();
  // we are referring to input to change the value
  const submitButton = () => {
    setNamee(nameeRef.current.value);
  };


    // const [name, setName] = useState("Nature");

       // declaring the state hooks
const [name, setName] = useState("Magic");
// const [namee, setNamee] = useState("Imagination");

// here we use the setter to change the content of the name state
const handleClick = () => setName('Nature')
// const handleClick = () => setImage('Nature')
 useEffect(()=>{
    alert(`hello this a message`)
   },[])
   
  return (
    <div>
  
  

     {/* here <p>hello my nwe use the getter to get the state value */}
  
     

     

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">{name}</Navbar.Brand>
  <button onClick={handleClick}> {props.uu} </button>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
         ref={nameeRef}

      />
      <Button variant="outline-success" onClick={submitButton} >Search</Button>

      <div className="App">
     {/* <p>{namee}</p> */}
     <h5>Who is your favorite</h5>

     {/* <div>
       <input  variant="outline-success"
         placehoder="enter your preferred GOT character..."
         ref={nameeRef}
         type="text"
       />
       <button type="button" onClick={submitButton}>
         Search
       </button>
     </div> */}
   </div>




    </Form>
  </Navbar.Collapse>
</Navbar>
<hr></hr>
<div>
<CardGroup>
  <Card>
    <Card.Img  variant="top" src="https://user.oc-static.com/files/6001_7000/6410.jpg" />
    <Card.Body>
      <Card.Title>{namee}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://st2.depositphotos.com/3759967/5593/i/600/depositphotos_55936567-stock-photo-swirling-frosty-multi-colored-fractal.jpg" />
    <Card.Body>
      <Card.Title>{namee}</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://user.oc-static.com/files/6001_7000/6410.jpg" />
    <Card.Body>
      <Card.Title>{namee}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> 
        </div>

       
    </div>





)
}

export default De;
