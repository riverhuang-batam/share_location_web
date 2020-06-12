import React, {useState} from "react";
import "./PlaceItem.css";
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modals from '../../shared/components/UIElements/Modals'
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)
  return (
    <React.Fragment>
      <Modals show={showMap} onCancel={closeMapHandler} header={props.address} footer={<Button></Button>}>

      </Modals>
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
          <Button className="btn-primary" onClick={openMapHandler}>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`} className="btn-success">EDIT</Button>
          <Button className="btn-danger">DELETE</Button>
      </div>
    </Card>
    </div>
    </React.Fragment>
  );
};
export default PlaceItem;

