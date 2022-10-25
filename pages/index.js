import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'
import Header from '../components/header'
import Messages from '../components/messages';

 
export default function Home() {

 
  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login/>



  return (
    <div className='h-screen'>
      <Head>
        <title>Dapp Messanger</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to bg-fuchsia-900 overflow-hidden'>
        <div className='max-w-screen-2xl mx-auto'>
          {/* Header */}
          <Header/>
          {/* Message */}
          <Messages/>
        </div>
        <button onClick={logout}></button>
      </div>
      
    </div>

    
  );
}

