import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = props => {
  if ( props.items.length === 0){
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. May be create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  
  return <ul className='place-list'>
      {props.items.map(places => (
      <PlaceItem 
        key={places.id} 
        id={places.id} 
        title={places.title} 
        image={places.imageUrl} 
        description={places.description} 
        address={places.address} 
        creatorId={places.creatorId} 
        coordenades={places.location}
        />))}
    </ul>;
}

export default PlaceList
