import React from 'react';

//In this component we are listing our Team Members that we have passed as props from state : map through them and display

export default function TeamList(props) {
    console.log(props);
    
    return (

 <div> 

<h3 className="teamlisttitle">The Team List </h3>

{props.membersubmit.map(member => {
   return <div className="parent">
   
            <h2>{member.name}</h2>
            <p>{member.email} </p>
              <p>{member.role} </p> 
              <button>Edit</button>
              </div>
})}



        </div>

 
);

}





