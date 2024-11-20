function AboutUs(props){
  return (
    <div>
      <h2>About {props.company}</h2>
    <p>We are a team of passionate developers dedicated to building great software.</p>
  </div>
  )
}

export default AboutUs;






// function AboutUs(){
//   const title="vm"
//   return (
//     <div>
//        {title==="vm"?<h2>About VM Online Training</h2>:<h2>About Us</h2>}

//     {/* {title==="vm" && <h2>About VM Online Training</h2>}
//     {title==="youtube" && <h2>About Youtube Channel</h2>}
//     {title!=="vm" && title!=="youtube" && <h2>About Us</h2>} */}
//     <p>We are a team of passionate developers dedicated to building great software.</p>
//   </div>
//   )
// }

// export default AboutUs;