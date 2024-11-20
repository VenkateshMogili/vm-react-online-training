function SocialMediaLink(){
  const socialMediaLinks = ['Facebook','Twitter','Instagram','WhatsApp','Amazon'];
  return (
    <div>
      <h3>Follow Us</h3>
      <ul>
        {socialMediaLinks.map((link,index)=>(
        <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaLink;