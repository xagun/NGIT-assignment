import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { add } from "assignment-ui"
// import { subtract } from "assignment-ui"
import { Modal } from "assignment-ui"



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

<Modal appName="assignment" userData={userData}>Click Me</Modal>
    {/* { add(1, 2)}
    {subtract(10,9)} */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
