
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Cards from "./card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="pt-0 pr-[3rem] pb-[3rem] pl-[3rem]">
            <h2 className="text-[1.75rem] text-white m-[2.5rem]">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="flex flex-wrap justify-center">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList