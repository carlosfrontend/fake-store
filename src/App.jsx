import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { useState } from "react"
import { Footer } from "./components/Footer/Footer"

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
    <Header cartItemsCount={cartItems.length}/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
