import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import './App.css';

export default function App() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'false',
        include_video: 'false',
        page: page,
        sort_by: 'popularity.desc',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFmM2ZjM2RiMWQwOThiYmVmOWE1NGMxZTM5NGUxZiIsInN1YiI6IjY1OGM3YjA3N2ExYmQ2MmQ3MjU0YjBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8FUYVDzcxjD4o7cCYpU2Cxuf0EMNo8xec4oPnfFI6E'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page, searchMovie]);


  const search = () => {

    const optionsSearch = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: searchMovie,
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFmM2ZjM2RiMWQwOThiYmVmOWE1NGMxZTM5NGUxZiIsInN1YiI6IjY1OGM3YjA3N2ExYmQ2MmQ3MjU0YjBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8FUYVDzcxjD4o7cCYpU2Cxuf0EMNo8xec4oPnfFI6E'

      }
    };
    axios
      .request(optionsSearch)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    }
    const returne = () => {
      setPage(page - 1);
    };

    const next = () => {
      setPage(page + 1);
    };
    const changeMovie = (newCity) => {
      setSearchMovie(newCity);
    };
    return (
      <div className="home">
        <Header Search={search} dataCity={changeMovie} />
        <div className="list">
          {movie.map((item) => (
            <Movies key={item.id} data={item} />
          ))}
        </div>
        <div className="page">
          <i className='bx bx-chevron-left' onClick={returne}></i>
          <i className='bx bx-chevron-right' onClick={next}></i>
        </div>
      </div>
    );
  }

