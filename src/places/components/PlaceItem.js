import React from "react";
import "./PlaceItem.css";
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
const PlaceItem = (props) => {
  return (
    <div className="col-md-6">
      <Card className="card shadow mt-4">
      <div>
        <img src={props.image} alt={props.title} className="card-img" />
      </div>
      <div className="card-body">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
      </div>
      <div>
          <Button className="btn-primary">VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`} className="btn-success">EDIT</Button>
          <Button className="btn-danger">DELETE</Button>
      </div>
    </Card>
    </div>
  );
};
export default PlaceItem;

