import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";
const UserItem = (props) => {
  return (
    <div className="col-md-3">
      <Link to={`/${props.id}/places`}>
        <Card className="card">
          <Avatar image={props.image} alt={props.name} />
          <div className="card-body">
            {props.name}
            {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
          </div>
        </Card>
      </Link>
    </div>
  );
};
export default UserItem;
