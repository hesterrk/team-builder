
//Where we have our form built: as a way of adding new members 
//Build inputs for `name`, `email` and `role`(select- so drop down and people can select which one) (backend engineer, frontend engineer, designer)
//Set up a submit state to pass down to TeamList: so they recieve the data entered in so can be added to the list 


import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TeamList from './TeamList';


const animationName = keyframes`
  0% { background: lavender; }
  100% { background: #8CA6DB; }
`

const Label = styled.label `
padding: 20px;
display: flex;
justify-content:center;
animation: ${animationName} 3s ease infinite alternate;
border: 2px solid lavenderblush;
border-radius: 8px;


`
const Form = styled.form `
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 50px;
padding-left: 30px;
padding-right: 30px;
border-radius: 10px;
`


export default function MyForm() {

  //adding info that will be sent down to team list so it displays

  const [submitTeam, setSubmitTeam] = useState([]);


const [team, setTeam] = useState({
name: "",
email: "",
role: "",

});

//add functionality

const submitChangeHandler = (event) => {
    event.preventDefault();
    setSubmitTeam([...submitTeam, 
      team
    ])

const resetForm = {
  
    name: "",
    email: "",
    role: "",
    
  
}
setTeam(resetForm)


}

const eventChangeHandler = (event) => {


    setTeam({
        ...team,
        [event.target.name]: event.target.value

       
    })

    console.log(event.target.name)
  
  console.log(event.target.value)

}


    return (

        <div className="formContainer">

<Form onSubmit={submitChangeHandler}>
        <Label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            onChange={eventChangeHandler}
            value={team.name}
          />
        </Label>
        <Label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter your email here"
            onChange={eventChangeHandler}
            value={team.email}
          />
        </Label>
        <Label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="Enter your role here"
            onChange={eventChangeHandler}
            value={team.role}
          />
        </Label>
        <input type="submit" />
      </Form>

      <br>
      </br>
      <br>
      </br>

{/* //passing down info to teamList  */}


<TeamList membersubmit = {submitTeam} />

        </div>
    );



}






