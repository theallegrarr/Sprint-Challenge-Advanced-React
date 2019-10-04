import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

const playersApi = 'http://localhost:5000/api/players';

export default class Market extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
 
  componentDidMount(){
   const getPlayers = axios.get(playersApi);
    
    Promise.all([getPlayers])
     .then(([playerRes]) => {
       this.setState({
         players: playerRes.data,
       });
     });
  }
 
  render() {
    return (
    <>
     <PlayerCard players={this.state.players}/>
    </>
    );
  }
 }