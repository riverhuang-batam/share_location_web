import React from 'react'
import ReactDOM from 'react-dom'
import './Backdrop.css'

const Backdrop = props => {
    const BackDropComponent = (
        <div className="backdrop" onClick={props.onClick}> </div>
    )
    return(
        ReactDOM.createPortal(BackDropComponent, document.getElementById('backdrop-hook'))
    )
}
export default Backdrop;
