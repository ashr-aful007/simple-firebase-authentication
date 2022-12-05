import './App.css';
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
 const facebookProvider = new FacebookAuthProvider();

 const handlesignout = () =>{

  signOut(auth)
  .then(() =>{
    setUser({});
  })
  .catch( () =>{
    setUser({})
  })
  
  }

  const handleFacebookSignIn = () =>{
    signInWithPopup(auth, facebookProvider)
    .then(result =>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })

  }

  const handleGithubsignIn = () =>{
      signInWithPopup(auth, githubProvider)
       .then(result =>{
        const user = result.user;
        console.log(user);
        setUser(user)
       })
       .catch( error =>{
        console.error(error)
       })
  }

 const handlerauth = () =>{
      signInWithPopup(auth, googleProvider)
      .then(result =>{
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error =>{
        console.error(error)
      })

      
 }
  return (
    <div className="App">
     {/* condition ? true: false  */}
      { user.uid ?
      <button onClick={handlesignout}>sigin out</button>      
        :
        <>
        <button onClick={handlerauth}>google sin in button</button>
        <button onClick={handleFacebookSignIn}>Facebook Sign in</button>
        <button onClick={handleGithubsignIn}>Github sign in</button>
        </>
        }

      { user.uid && <div>
      <h3>User name: {user.displayName}</h3> 
      <p>Email address: {user.email}</p> 
      <img src={user.photoURL} alt="loading"/>    
      </div>}
    </div>
  );
}

export default App;
