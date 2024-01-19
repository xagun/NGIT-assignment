import { useState } from 'react'

import './App.css'
// import { add } from "assignment-ui"
// import { subtract } from "assignment-ui"
import { Modal } from "assignment-ui"

import { Button } from "@/components/ui/button"




function App() {
  // const [count, setCount] = useState(0)
  const userData = [{name:"Testman", dob:"1998-09-22", description:"hello"},
   {name:"Testman 1", dob:"1998-09-22", description:"hello"},
   {name:"Testman 2", dob:"1998-09-22", description:"hello"},
   {name:"Testman 3", dob:"1998-09-22", description:"hello"},
   {name:"Testman 5", dob:"1998-09-22", description:"hello"},
   {name:"Testman", dob:"1998-09-22", description:"hello"}]

  return (

    
    <>

<div className='bg-red-700 p-8'>

<Modal appName="assignment" userData={userData}></Modal>
<Button className='p-6 bg-yellow-500'>View All</Button>

</div>
 
      
    </>
  )
}

export default App
