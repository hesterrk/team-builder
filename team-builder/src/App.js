import React, { useState } from 'react';
import './App.css';
import MyForm from './components/Form';


function App() {

  //setting up edit member state and event handler function
  // const [membertoEdit, setMemberToEdit] = useState();


  // const handleEditClick = () => {
  //   setMemberToEdit(membertoEdit);
  //   alert('you clicked to edit');
  // }



  return (
    <div className="App">
      <div className="maintitle">
     <h1> Team Builder Form</h1> </div>



      <MyForm/>
      

    </div>
  );
}

export default App;


