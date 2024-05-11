import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Home from '../src/page/Home'
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
const location=useLocation()
console.log(location.pathname,"locationj")
  return (
   <div>
    <Home/>
   </div>
  )
}

export default App
