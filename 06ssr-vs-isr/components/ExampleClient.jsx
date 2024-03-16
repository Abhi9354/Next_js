'use client'

import ExampleServer from "./ExampleServer";

const ExampleClient = () => {
    console.log('i am client component');
  return (
    <div>
      <ExampleServer/>
    
    </div>
  )
}

export default ExampleClient
