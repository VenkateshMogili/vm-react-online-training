function ContactInfo(props) {
  return (
    <div>
      <h3>Contact Us</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default ContactInfo;


// function ContactInfo() {
//   const userRole="admin"
//   return (
//     <div>
//       <h3>Contact Us</h3>
//       <p>Email: {userRole==="admin" ? 'admin@company.com':'user@company.com'}</p>
//       <p>Phone: +123 456 7890</p>
//     </div>
//   )
// }

// export default ContactInfo;