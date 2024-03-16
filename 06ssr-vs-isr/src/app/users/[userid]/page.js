import { getUser } from "../../../../lib/getUser.js";

const User = async({params}) => {
const user = getUser(params.userid);
const userdata= await user;
  return (
    <div classname ="flex justify-center items-center h-screen border-2">
      {userdata.name}
    </div>
  )
}

export default User
