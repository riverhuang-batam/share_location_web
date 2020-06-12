import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <p>No Places Found, Maybe Create one?</p>
        <button>Share Place</button>
      </Card>
    );
  }
  return (
    <div className="container">
    <div className="row">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
      </div>
    </div>
  );
};
export default PlaceList;
