import React, { useContext } from 'react'
import "./header.css"
import { useUser } from '../../context/UserContext'

export default function Header({setIsLoginOn}) {
 
  const {userIsLoggedIn} = useUser()
  return (
    <header>
        <h1>Wilkommen</h1>
        { userIsLoggedIn ?
          <button>Logout</button>
          :
          <button onClick={() => setIsLoginOn(true)}>Login</button>
          }
    </header>
  )
}
