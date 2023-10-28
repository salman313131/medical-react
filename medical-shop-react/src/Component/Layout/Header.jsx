import { Fragment } from "react";
import './Header.css'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
        <Fragment>
            <header className='header'>
                <h1>Medicine</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        </Fragment>
    )
}
export default Header