const Movies = (props) => {
  return (
    <>
    <div className="Box">
      <img src={props.img} alt=""/>
      <p className="Title1">Title:{props.title}</p>
      <p className="Title2">Year: {props.year}</p>
     
    </div>
      
    </>
  )
}

export default Movies