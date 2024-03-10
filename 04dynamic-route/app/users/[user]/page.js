
const User = ({params}) => {
    console.log("pramas",params.user)
  return (
    <div>
      {params.user}
    </div>
  )
}

export default User
