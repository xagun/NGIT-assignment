import { useState } from 'react'

import './App.css'
// import "assignment-ui/styles.css"
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


<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-blue-800 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="">
            
            <Modal userData={userData}></Modal>
              <Button className='p-6 bg-yellow-500'>View All</Button>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</div>




      
    </>
  )
}

export default App
