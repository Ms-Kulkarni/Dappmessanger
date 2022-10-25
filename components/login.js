import Image from "next/image";
import {useMoralis} from 'react-moralis'


function login() {
    const { authenticate } = useMoralis();
  return (
        <div  className="bg-black relative">
          <h1>logg In </h1>
          
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
              <img 
                  className='object-cover rounded-full h-200 w-200'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAkNE9xrZOr8vxSCs9MRM7khvKbjLZjD9iw&usqp=CAU"
                
                />              
              <button onClick={authenticate} className='bg-yellow-300 rounded-lg p-5 mt-10 font-bold animate-pulse'>Login to the Metaverse</button>
            </div>

          <div  className='w-full h-screen'>
              <Image
                  src='https://links.papareact.com/55n'
                  layout="fill"
                  objectFit="cover"
                />
            </div>
        </div>
    )
}

export default login
