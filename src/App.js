




import React, { Component } from 'react';
import Social from './comp1/Social';
import './style.css';
import PropTypes from 'prop-types'


export default class App extends Component {

 


  handleName = () => {
    alert ('will smith');
}


  /*state={
     alert : "Will", 
   
}
*/
  

   
 

  // this.setstate({

  
 //  })
        
       

 /*  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
 static propTypes = {

  }
*/
  render() {
    return (
      <div>
        <h1> Page de profil</h1>
       
    <Social bio= 'go' profession = "doc"  message = {this.handleName}>   Will Smith 
   
   { <img src = {"https://user.oc-static.com/files/6001_7000/6410.jpg"} alt="im" />  }
    </Social> 
   
    {/* <Social> GO </Social>  */}
    {/* <Social> doc </Social>  */}
    
    <h1>  
               <button onClick= {this.handleName}>handleName </button>                 
            </h1>

     
      </div>
    )
  }
}


Social.propTypes = {
  fullName: PropTypes.string
  // profession: PropTypes.string,
  // bio: PropTypes.string,
  // handleName:PropTypes.function
  }
  










/*
import React from 'react';
import { Social } from './comp1/Social';
import './style.css';


const App = () => {
  return (
    <div>

      <Social/>
      <handleName/>
    </div>
  )
}

export default App


/*
import Social from './Social';

import {Form, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { Adress } from './component/Adress';
import { Photo } from './component/Photo';
import Name from './component/Name';

function App() {


  return (
    <div className="App" bg-primary>

      <div className="navbar bg-primary">
        <h1 style={{ color: "red", fontSize: 50 }} >react</h1>
      </div>



      <div>
        <Name />
        <Photo />
        <Adress />

      </div>

    </div>

  );
}

export default App;
*/