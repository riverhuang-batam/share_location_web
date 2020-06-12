import React from 'react'
import './Avatar.css'
const Avatar = props => {
    
    return(
        <div>
            <img
                src={props.image}
                alt={props.alt}
                className="card-img-top"
                />
        </div>
    )
}
export default Avatar;