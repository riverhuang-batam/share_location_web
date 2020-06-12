import React from 'react'
import './UsersList.css'
import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'
const UsersList = props => {
    console.log(props)
    if(props.items.length === 0){
        return (
        <Card>
            <h2>No Users Found</h2>
        </Card>
        )
    } 
    return (
    <div className='row container'>
        {props.items.map(user => {
            console.log(user)
            return (
            <UserItem 
            key={user.id}
            id={user.id}
            image = {user.image}
            name = {user.name}
            placeCount={user.places}
            />
            )
        })}
    </div>
    )
}
export default UsersList