import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from '../Loading/Loading';

import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  let { id, media_type } = useParams();

  const [itemDetails, setItemDetails] = useState([]);
  async function getItemDetails(id, mediatype) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=b49758eb4744db6ac916bf58c7c8fe89&language=en-US`);
    // console.log(data);
    setItemDetails(data);
  }
  useEffect(() => {
    getItemDetails(id, media_type)
  });

  return (
  <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
      </Helmet>
    {itemDetails.length !== 0 ?
      <div className="row">
        
        <div className="col-md-3 my-5">
        {itemDetails.poster_path?<img
                className="w-100 "
                src={`https://image.tmdb.org/t/p/w500/${itemDetails.poster_path}`}
                alt=""
            />:<img
                className="w-100 "
                src={`https://image.tmdb.org/t/p/w500/${itemDetails.profile_path}`}
                alt=""
            />}
        </div>
        <div className="col-md-9 my-5">
        <h2 className=" my-4 ">{itemDetails.title} {itemDetails.name}</h2>
        <p className="text-muted">{itemDetails.tagline}</p>
        <div  className="d-flex justify-content-start">
       {itemDetails.genres? itemDetails.genres.map((genre,index)=>
        <span key={index} className=" bg-info text-white mx-2 p-2 rounded-2 my-3">{genre.name}</span>
       ) :null}
       </div>
        {itemDetails.vote_average?<h5 className="my-5">Vote : {itemDetails.vote_average?.toFixed(1)}</h5>:''}
        
        {itemDetails.vote_count?<h5 className="my-5">Vote Count : {itemDetails.vote_count}</h5>:''}
       
        {itemDetails.popularity?<h5 className="my-5">Popularity : {itemDetails.popularity?.toFixed(1)}</h5>:''}
        {itemDetails.release_date?<h5 className="my-5">Release Date : {itemDetails.release_date}</h5>:''}
        <p className="text-muted">{itemDetails.overview}</p>
        </div>
      </div>:<Loading/>}
  </>
  );
}
