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

  return (
   <div>
   
    <Header></Header>
    <AllRoute></AllRoute>
    <Footer></Footer>
    <MobileFooter></MobileFooter>
   </div>
  )
}

export default App
