// /app/user/page.ts

'use client'

import { useEffect, useState } from 'react';

const UserProfile = () => {
 const [user, setUser] = useState({});

 useEffect(() => {
     fetch('/api/getUser') // Assuming '/api/user' is the endpoint that uses the GET function
       .then((response) => response.json())
       .then((data) => setUser(data));
   }, []);

 return (
     <div className="min-h-screen bg-black flex flex-col items-center justify-center">
               <h1 className="text-2xl font-bold text-center mb-4">{user.displayName}</h1>
               {user.imageUrl && <img className="w-32 h-32 rounded-full mx-auto" src={user.imageUrl} alt={user.displayName} />}
     </div>
 )
}

export default UserProfile

