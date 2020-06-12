import React from 'react'
import {useParams} from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1578309353735-ANT9MLQ136L7PGTQ5JYE/ke17ZwdGBToddI8pDm48kNCH0IFo-E28D0rm_d_wnF4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczdH3qUBwO6oWXP_OkYMa5KbLFw5Om5Yp_Nt25Y6nc5ZZuUUY1FOqARMqv9i1pcqr/empire-state-building.jpg?format=1500w',
        address: '20 W 34th St, New York, NY 10001, Amerika Serikat',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator : '1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1578309353735-ANT9MLQ136L7PGTQ5JYE/ke17ZwdGBToddI8pDm48kNCH0IFo-E28D0rm_d_wnF4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczdH3qUBwO6oWXP_OkYMa5KbLFw5Om5Yp_Nt25Y6nc5ZZuUUY1FOqARMqv9i1pcqr/empire-state-building.jpg?format=1500w',
        address: '20 W 34th St, New York, NY 10001, Amerika Serikat',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator : '2'
    }
]

const UserPlaces = () => {
const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => 
    place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}
export default UserPlaces