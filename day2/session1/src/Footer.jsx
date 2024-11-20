function Footer(){
  const isCopyright=false;
  return (
  <footer>{isCopyright && <span>&copy;</span>} {!isCopyright && <span>&reg;</span>} 2024 VM Online Training. All rights reserved.</footer>
  )
}

export default Footer;