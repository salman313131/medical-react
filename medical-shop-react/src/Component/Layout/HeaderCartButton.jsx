import CartIcon from "../Cart/CartIcon"
const HeaderCartButton=(props)=>{
    return(
        <button className='button2' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>3</span>
        </button>
    )

}
export default HeaderCartButton