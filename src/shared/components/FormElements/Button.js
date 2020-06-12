import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'
const Button = (props) => {
    if(props.to){
        return(
            <Link to={props.to} exact={props.exact} className={`btn ${props.className}`}>
                {props.children}
            </Link>
        )
    }
    if(props.href){
        return(
            <a className={``} href={props.href}>
                {props.children}
            </a>
        )
    }
    return(
        <button className={`btn ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default Button;