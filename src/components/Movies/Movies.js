// Movies.js
import React from 'react';
import './Movies.css';

export default function Movies(props) {
  const { data } = props;

  return (
    <div className='cadre'>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
      <h3>{data.title}</h3>
      <span>
      <p>{data.release_date}</p>
      <p>Vote Average: {data.vote_average}<i className='bx bxs-star-half'></i></p>
      </span>
    </div>
  );
}
