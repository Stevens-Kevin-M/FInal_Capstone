import React, { useState } from 'react';

let token = 'b2a57add5c3c47839ff9db859167ce70'

export const Search = () => {

  const [searchedItem, setSearchedItem] = useState("")
  const [gameResults, setGameResults] = useState([])
  const [gamePlatforms, setGamePlatforms] = useState([])
  const [gameDevelopers, setGameDevelopers] = useState([])
  const [gameRating, setGameRating] = useState([])

  const handleChange = (e) => {
    setSearchedItem(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchedItem.split(' ').join('-').toLowerCase()
 
    setGameResults([])
    fetch(`https://rawg.io/api/games/${slug}?key=${token}`)
    .then(resp => resp.json())
    .then((results) => {
      results === undefined ? alert('Nothing there!') : setGameResults(results)
    setGamePlatforms(results.parent_platforms[0].platform.name)
    setGameDevelopers(results.developers[0].name)
    setGameRating(results.esrb_rating.name)
    })
    setSearchedItem("")
  }

  return (
    <div id='GameSearch'>
      <h1>Find Your Next Adventure...</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchedItem} onChange={handleChange} id='searchinput' placeholder='Search for a game...'/>
          <br></br>
          <br/>
          <input type="submit" id='submitsearch'/>
        </form>
        <h2>{gameResults.name}</h2>
        <h5 id='metacritic'>Metacritic Score: {gameResults.metacritic} out of 100 | ESRB Rating: {gameRating} | Website: {gameResults.website}</h5>
  <h5>Platforms: {gamePlatforms} | Developer: {gameDevelopers} | Release Date: {gameResults.released}</h5> 
        <img src={gameResults.background_image} alt="" id='background_image'/>
        <p id='game_description'>{gameResults.description_raw}</p>
    </div>
  )};