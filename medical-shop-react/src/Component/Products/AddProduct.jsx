import { useState } from 'react'
import './AddProduct.css'
const AddProducts=(props)=>{
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [price,setPrice] = useState(0)
    const [qty,setQty] = useState(0)
    const addItem=(e)=>{
        e.preventDefault()
        const data={name:name,desc:desc,price:price,qty:qty}
        props.onAdd(data)
    }
    return(
        <form className='form1' onSubmit={addItem}>
            <div className='div1'>
                <label>Name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='div1'>
                <label>Description</label>
                <input type='text' value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            </div>
            <div className='div1'>
                <label>Price</label>
                <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div className='div1'>
                <label>Quantity</label>
                <input type='number' value={qty} onChange={(e)=>setQty(e.target.value)}></input>
            </div>
            <button className='button1'>Add Product</button>
        </form>
    )
}
export default AddProducts