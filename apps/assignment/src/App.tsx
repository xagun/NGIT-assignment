import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Skeleton } from './components/ui/skeleton'
import { Modal } from 'assignment-ui'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalUI />
    </QueryClientProvider>
  )
}

function ModalUI() {
  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://dummyjson.com/users').then((res) =>
        res.json(),
      ),
  })

  console.log(data)



  return (
    <Modal>
  
    {  isLoading ?   
    <>
         <Skeleton className="h-6 w-[180px] m-2" />

         {Array(5)
           .fill(0)
           .map((_, i) => (
             <div key={i} className="flex items-center space-x-2 my-4">
               <Skeleton className="h-10 w-10 rounded-full" />
               <div className="space-y-2">
                 <Skeleton className="h-4 w-[150px]" />
                 <Skeleton className="h-4 w-[80px]" />
               </div>
             </div>
           ))}
       </>

       :<>
                 <h1 className="text-lg m-2">24 Birthdays Today</h1>
       
                 <ul>
                   {data?.users.slice(0,5).map(
                     (item: {
                       id: string;
                       firstName: string;
                       lastName: string;
                       age: number;
                       image: string;
                     }) => (
                       <div
                         key={item.id}
                         className="flex items-center space-x-2 my-4"
                       >
                         <img src={item.image} className="h-10 w-10 rounded-full" />
                         <div className="space-y-2">
                           <p className="h-3 w-[200px] text-sm">
                             {item.firstName} {item.lastName}{" "}
                           </p>
                           <p className="h-3 w-[100px] opacity-70 text-xs">
                             {item.age} years
                           </p>
                         </div>
                       </div>
                     )
                   )}
                 </ul>
                 <div className="flex justify-center">
                   <button className="bg-gradient-to-r from-[#e171cd] to-[#ff69a4] text-white px-4 py-2 my-4 rounded text-white w-[280px] h-[50px] shadow-[0px_5px_8px_0px_rgba(251,152,202,255)]">
                     View All
                   </button>
                 </div>
               </>
}
    </Modal>
  )
}
