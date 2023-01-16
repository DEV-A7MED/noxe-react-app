import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let mediaContext= createContext('');

export default function MediaContextProvider(props){

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
  
    async function getTrending(mediaType, callback) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=b49758eb4744db6ac916bf58c7c8fe89` );
      callback(data.results);
    }
  
    useEffect(() => {
      getTrending("movie", setTrendingMovies);
      getTrending("tv", setTrendingTv);
      getTrending("person", setTrendingPeople);
    }, []);

    return <mediaContext.Provider value={{trendingMovies,trendingPeople,trendingTv}}>

        {props.children}
    </mediaContext.Provider>
}