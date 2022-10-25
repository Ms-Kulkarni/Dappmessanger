import { useMoralis } from 'react-moralis';
import Avatar from './avatar';
import ChangeUsername from '../components/chageUsername';
import Image from 'next/image'

function header() {
    const { user } = useMoralis();
  return (
    <div className='text-pink-200 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700'>
        <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
            <div className='col-span-6 text-left lg:text-center'>
                <div className='relative mt-20 h-48 w-48 lg:mx-auto rounded-full border-pink-500 border-10 '>
                      <Avatar logoutOnPress />
                   
          </div>
          <h1 className='text-3xl'>
            Welcome to the Metaverse
          </h1>

          <h2 className='text-5xl font-bold truncate'>
            {user.getUsername()}
          </h2>
          <ChangeUsername/>
            </div>
        </div>

    </div>
  )
}

export default header
