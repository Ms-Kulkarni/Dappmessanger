import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import SendMessage from './sendMessage';
import Message from './message'

const MINS_DURATION = 15;

function message() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  // really time listner function
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan('createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  console.log(data);
  return (
      <div className='pb-56'>
          <div className='my-5'>
              <ByMoralis
                variant='dark'
                  style={{ marginLeft: 'auto', marginRight: "auto" }} />
            </div>
      <div className='space-y-10 p-4'>
        {data.map(message => (
          <Message key={message.id} message={message} />
        ))}
                </div>
      <div className='justify-center flex'><SendMessage endOfMessagesRef={endOfMessagesRef} /></div>
          
          <div ref={endOfMessagesRef} className='text-center text-gray-400 mt-5'>
              <p>You're up to date {user.getUsername()}! 🚀</p>
          </div>
        </div>
    )
}

export default message
