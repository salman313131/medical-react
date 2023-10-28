import AddProducts from "./Component/Products/AddProduct"
import './App.css'
import { useState } from "react"
import Header from "./Component/Layout/Header"
function App() {
  const [itemList,setItemList] = useState([])
  const addItems=(data)=>{
      setItemList(prevState=>{
        return [data,...prevState]
      })
  }
  return (
    <>
      <Header />
      <AddProducts onAdd={addItems}/>
    </>
  )
}

export default App
