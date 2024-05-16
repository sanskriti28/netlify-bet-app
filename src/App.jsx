import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import Footer from './component/Footer'
import MobileFooter from "./component/MobileFooter";
import Header from './component/Header'
import AllRoute from './allroute/AllRoute';



function App() {
  const [count, setCount] = useState(0)
  const {
    bgColor1,
    bgColor2,
    PrimaryText,
    secondaryText,
     hoverColor,
     ClickActiveColor
  } = useSelector((state) => state.theme);


  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
   <div>
   
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Header>
    <AllRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></AllRoute>
    <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Footer>
    <MobileFooter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></MobileFooter>
   </div>
  )
}

export default App
