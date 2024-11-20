import AboutUs from "./AboutUs";

function Greeting(props){
  return (
    <div>
  <h1>Hello, Welcome to {props.course}</h1>
  <AboutUs company="Venkatesh"/>
  </div>
  )
}

export default Greeting;



// function Greeting(){
//   const course="react";
//   return <h1>Hello, Welcome to {course==="react" ? 'React!':'Angular!'}</h1>
// }

// export default Greeting;

// function Greeting(){
//   const course="";
//   return <h1>Hello, Welcome to {course==="react" && 'React!'} {course!=="react" && 'Angular!'}</h1>
// }

// export default Greeting;