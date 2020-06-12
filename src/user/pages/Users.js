import React from 'react'
import UsersList from '../components/UsersList'
const Users = () => {
    const USERS = [
        {id: 1, name: 'tester', places: 3, image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=illuminated-tower-2614818.jpg&fm=jpg',},
        {id: 2, name: 'Setter', places: 1, image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=illuminated-tower-2614818.jpg&fm=jpg',}
    ]
    return(
        <UsersList items={USERS}/>
    )
}
export default Users;
