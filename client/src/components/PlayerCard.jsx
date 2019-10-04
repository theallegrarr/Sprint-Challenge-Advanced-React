import React from 'react';

export default function (props) {
 
 return(
  <div className='p-cards'>
  <h2>Players List</h2>
  {
  props.players.map(player => {
    return(
      <div className='player-details'>
        <h1>{player.name}</h1>
        <h4>URL: {player.country}</h4>
        <p>Search Hits: {player.searches}</p>
      </div>
    );
  })
  }
  </div>
  );
}