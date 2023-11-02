import React from 'react'
import { useParams } from 'react-router-dom'

const Info = ({movies}) => {
    const {title}=useParams()
    const movie=movies.find(el=>el.title==title)
  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  )
}

export default Info