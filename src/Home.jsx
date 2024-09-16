function Home(props) {
    console.log(props)
    return (
        <>
        <h1>my name is</h1>
        <h1>Name : {props.actorInfo.name}</h1>
        
      <h1>Age : {props.actorInfo.age}</h1> 
      <h1>Occupasion : {props.actorInfo.occupasion} </h1>  
      <h1>Country : {props.actorInfo.country}</h1>
        </>
    )
}
export default Home ;