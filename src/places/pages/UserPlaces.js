import React from "react";

import PlaceList from "../components/PlaceList";

const UserPlaces = props => {
  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Zürich view Quaibrücke',
      descriptio: 'Old town of Zurich from the Quaibrücke. This view contains many of the most important landmarks, including the Fraumünster, Grossmünster, St. Peter Church and the river Limmat. ' ,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg/640px-Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
      address:'Zürich',
      location:{
        lat:'47.3720821',
        lng:'8.5261814'
      },
      creator:'u1'
    },
    {
      id: 'p2',
      title: 'Zürich view Quaibrücke',
      descriptio: 'Old town of Zurich from the Quaibrücke. This view contains many of the most important landmarks, including the Fraumünster, Grossmünster, St. Peter Church and the river Limmat. ' ,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg/640px-Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
      address:'Zürich',
      location:{
        lat:'47.3720821',
        lng:'8.5261814'
      },
      creator:'u2'
    }
  ];
  return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces;
