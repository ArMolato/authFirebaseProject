import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth } from '../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const listen = onAuthStateChanged(auth, user => {
        if(user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });

      return () => {
        listen()
      }
    }, [])

    const userSignOut = () => {
      signOut(auth).then(() => {
        console.log(`${authUser.email} has signed out`)
      }).catch(err => err);
    } 

  return (
    <div>
      {authUser 
      ? <><p>You signed as {authUser.email}</p><button onClick={userSignOut}>SignOut</button></>
      : <p>SignIn</p>}
    </div>
  )
}


export default AuthDetails;