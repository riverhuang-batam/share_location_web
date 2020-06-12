import React from 'react'
import './SideDrawer.css'

const SideDrawer = props =>{
    return(
        <aside className="">
            {props.children}
        </aside>
    )
};
export default SideDrawer