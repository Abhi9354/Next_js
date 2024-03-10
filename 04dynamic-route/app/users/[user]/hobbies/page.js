import Link from 'next/link'
import React from 'react'

const Hobbies = ({params}) => {
  return (
    <div>
      <h1>Your hobbies</h1>
      <Link href={`../${params.user}/hobbies/cricket`}>Cricket</Link>
      <br/>
      <Link href={`../${params.user}/hobbies/badminton`}>badminton</Link>
      <br/>

      <Link href={`../${params.user}/hobbies/yoga`}>Yoga</Link>



    </div>
  )
}

export default Hobbies
