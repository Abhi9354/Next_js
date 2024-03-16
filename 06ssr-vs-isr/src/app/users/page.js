import React from 'react'
import { getAllUser} from '../../../lib/getAlluser'
import Link from 'next/link';

const Users = async() => {
    const userData=getAllUser();
    const users = await userData
  return (
    <div className='flex flex-col'>
      {users.map((item)=>{
        return  (<><p>{item.id}</p><Link href={`users/${item.id}`}>{item.name}</Link>
     </>) })}
    </div>
  )
}

export default Users