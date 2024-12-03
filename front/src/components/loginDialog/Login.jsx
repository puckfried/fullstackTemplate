import React, { useContext, useState } from 'react'
import "./login.css"
import { UserContext, useUser } from '../../context/UserContext'

export default function Login({setIsLoginOn}) {
  const [userInput, setUserInput] = useState("")
  const [pwInput, setpwInput]     = useState("")
  // const {userHandleLogin, userIsLoggedIn} = useUser()
const {userHandleLogin, userIsLoggedIn} = useContext(UserContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const finished = await userHandleLogin(userInput,pwInput)
    if (finished) setIsLoginOn(false)
  }


  return (
    <form onSubmit={submitHandler}>
        <div className='menu'>
          <h2>Login</h2>
          <button onClick={() => setIsLoginOn(false)}>X</button>
        </div>
        
        <div className='inputBox'>
            <label htmlFor="Benutzer">Benutzername</label>
            <input id='Benutzer' type="text" onChange={(e) => setUserInput(e.target.value)}/>
        </div>
        
        <div className='inputBox'>
            <label htmlFor="Password">Passwort</label>
            <input id='Password' type="text" onChange={(e) => setpwInput(e.target.value)}/>
        </div>
        <button>Log me in</button>

    </form>
  )
}
