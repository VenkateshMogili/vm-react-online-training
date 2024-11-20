function Button(props){
  return (
    <button onClick={()=>props.handleHighlight('Venkatesh')}>{props.title}</button>
  )
}

export default Button;