import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


export const MustPlay = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div id='MustPlay'>
      <ul>
      {
        games.map(game => (<li key={game.id}>
          <div>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt="game"/>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}