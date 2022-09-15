import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
 import busImage from "./img/bus.jpg"

// let student = {
//   name: "kiran",
//   subject :"science",
//   roll : "001"
// }

// let {name,subject,roll} = student;



//es5
// function Hi({name, color, width}) {
//   return <div >Hello {name}! {color} {width}</div>;
// }
 
//es5
//  const Hi = function Hi({name, color, width}) {
//   return <div >Hello {name}! {color} {width}</div>;
// }


// const Hi =  ({name, color, width}) => {
//     return <div >Hello {name}! {color} {width}</div>;
//  }
  

const Hi =  ({name, color, width}) => 
 (<div >Hello {name}! {color} {width}</div>);

//  const Hi =  ({name, color, width}) => 
// (<div >Hello {name}! {color} {width}</div>);



const MediaCard = ({ title, body, imageUrl }) => (
  <div className='mediacard'>
<h2>
  {title}
</h2>
<p>
  {body}
</p>

 <img width={300} src={imageUrl} /> 
  </div>
)

const MediaPage= () => (
  <>
  <MediaCard title="the bus"  body ="bus is good" 
 imageUrl="https://media.istockphoto.com/photos/classical-red-bus-picture-id492620954?k=20&m=492620954&s=612x612&w=0&h=Cst9xheZ3R_Q9HOVysGWCo2foLnpIBMxSe4U1S6OyqE="
/>

<MediaCard title="the car"  body ="Car is comfortable for travelling" 
 imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"
/>

<MediaCard title="Walk"  body ="Walk is good for health" 
 imageUrl="https://media.gettyimages.com/photos/mature-businessman-walking-on-a-city-street-holding-smartphone-picture-id1266020584?s=612x612"
/>
  </>
)



ReactDOM.render(<MediaPage/>,

 document.querySelector('#root'));

