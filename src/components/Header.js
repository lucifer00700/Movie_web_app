import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="mt-0 mb-[2.5rem] pt-[0.5rem] pb-0  flex justify-between items-center ">
            <div className="flex items-center">
                <Link to="/"><img className="w-[80px] cursor-pointer"  
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
                <Link to="/movies/popular">
                    <span className="ml-[10px] mr-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600">Popular</span>
                </Link>
                <Link to="/movies/top_rated">
                    <span className="ml-0 mr-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600">Top Rated</span>
                </Link>
                <Link to="/movies/upcoming">
                    <span className="ml-0 mr-[30px] text-[1.3rem] cursor-pointer text-white hover:text-red-600">Upcoming</span>
                </Link>
            </div>
        </div>
    )
}

export default Header; 