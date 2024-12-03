import { useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import Login from './components/loginDialog/Login'

function App() {
  const [isLoginOn, setIsLoginOn] = useState(false)

  return (
    <>
      <Header setIsLoginOn={setIsLoginOn} />
      {isLoginOn && <Login setIsLoginOn={setIsLoginOn}/>}
    </>
  )
}

export default App
