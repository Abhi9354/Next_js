
const Hobbie = ({params}) => {
  //catch all segments
    console.log("params",params)
  return (
    <div>
     <h1>{params.user}</h1> 
      {params.hobbie[0]}
    </div>
  )
}

export default Hobbie
