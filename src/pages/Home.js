import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
// import MovieList from "../../components/movieList/movieList";
import {BsFillStarFill} from "react-icons/bs";
import MovieList from "../components/movieList";

const Home = () => {

    const [popularMovies,setPopularMovies] =useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[] )
    return(
        <div>
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                  {
                    popularMovies.map(movie => (
                       <Link className="no-underline text-white" 
                       to={`/movie/{movie.id}`}>

                        <div className="h-[600px]">
                             <img
                             className="m-auto block w-[100%]" 
                             src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>

                        <div  className="absolute p-[5rem] bottom-0 h-[70%] flex flex-col 
                        w-[100%] justify-end items-start opacity-1 transition-opacity-[0.3s] hover:opacity-1">
                                  
                                    <div className="font-black text-[4rem] mb-[0.4rem] text-left">{movie ? movie.original_title: ""}</div>
                                    <div className="text-[2rem] mb-[1rem]">
                                        {movie ? movie.release_date : ""}
                                        
                                        <span className="ml-[3rem]">
                                            {movie ? movie.vote_average :"" }
                                            <i className="fas fa-star ml-[10px]" />{" "} {/* <BsFillStarFill/> */}
                                        </span>
                                    </div>
                                    <div className="italic text-[1rem] mb-[0.25rem] flex text-left w-[50%]">{movie ? movie.overview : ""}</div>
                                </div>
                       </Link>
                    ))
                  }
            </Carousel>
            <MovieList/>
     </div>
    )
}

export default Home;