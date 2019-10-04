import React from 'react';
import SetViewMode from './SetViewMode';

export default function (props) {
  const [mode, setMode] = SetViewMode('players-view', false);

 return(
  <div className={mode ? 'p-cards' : 'p-cards toggledp'}>
    <div className='nav'>
      <h2 data-testid='player-head'>Players List</h2>
      <div className="dark-mode__toggle">
      <div
        className={mode ? 'toggle toggled' : 'toggle'}
        onClick={setMode}
      /></div>
    </div>
  {
  props.players.map(player => {
    return(
      <div className='player-details'>
        <h1>{player.name}</h1>
        <h4>Country: {player.country}</h4>
        <p>Search Hits: {player.searches}</p>
      </div>
    );
  })
  }
  </div>
  );
}