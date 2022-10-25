import { useMoralis } from "react-moralis"

function chageUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis(); 

    const setUsername = () => {
        const username = prompt(`Enter your Username (current: ${user.getUsername()})`
        

        );

        if (!username) return;

        setUserData({
            username,
        });

    };
  return (
    <div className="text-sm absolute top-5 right-5">   
          <button isabled={ isUserUpdating} onClick={setUsername} className="hover:text-pink-700">Change your UserName</button>
    </div>
  )
}

export default chageUsername
