// import { useState } from 'react'

// import './App.css'
// // import "assignment-ui/styles.css"
// // import { add } from "assignment-ui"
// // import { subtract } from "assignment-ui"
// import { Modal } from "assignment-ui"

// import { Button } from "@/components/ui/button"

// import { Skeleton } from "@/components/ui/skeleton";


// function App() {
//   // const [count, setCount] = useState(0)
//   const userData = [{name:"Testman", dob:"1998-09-22", description:"hello"},
//    {name:"Testman 1", dob:"1998-09-22", description:"hello"},
//    {name:"Testman 2", dob:"1998-09-22", description:"hello"},
//    {name:"Testman 3", dob:"1998-09-22", description:"hello"},
//    {name:"Testman 5", dob:"1998-09-22", description:"hello"},
//    {name:"Testman", dob:"1998-09-22", description:"hello"}]

//   return (

    
//     <>



// {/* <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

//   <div className="fixed inset-0 bg-gray-500 bg-blue-800 transition-opacity"></div>

//   <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  
//       <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//           <div className="">
//           <div>
//       <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
//       <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
//       <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
//       <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
//       <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
//     </div>
//             <Modal userData={userData}></Modal>
//               <Button className='p-6 bg-yellow-500'>View All</Button>
//           </div>
//         </div>
    
//       </div>
//     </div>
//   </div>
// </div> */}
// <Modal userData={userData}></Modal>




      
//     </>
//   )
// }

// export default App



"use client";
// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Modal } from 'assignment-ui';
import { Button } from "@/components/ui/button"

import { Skeleton } from "@/components/ui/skeleton";


const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        // Simulating a delay of 5 seconds
        setTimeout(async () => {
          const response = await fetch('https://dummyjson.com/users');

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const result = await response.json();
        setIsLoading(false);

          setData(result.users.slice(0,5));
        }, 3000); // 5000 milliseconds = 5 seconds
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div>

  
            <Modal>
      <>
      
      {isLoading ?
      
    <>
 
          {
            Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center space-x-4 m-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" /> 
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            ))
          }
    </>
    :<ul>
    {data.map((item: { id: string; firstName: string; lastName: string; age:number;image:string}) => (
       <div key = {item.id} className="flex items-center space-x-4 m-4">
       <img src = {item.image} className="h-12 w-12 rounded-full" />
       <div className="space-y-2">
         <p className="h-4 w-[200px]">{item.firstName} {" "} {item.lastName} </p>
         <p className="h-4 w-[100px]">{item.age} years</p>
       </div>
     </div>
         
          ))}
    </ul>
      }




</>
      </Modal>

    </div>
  );
};

export default App;
