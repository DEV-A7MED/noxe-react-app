import React from "react";
import { Link } from "react-router-dom";

export default function MediaItem({ item }) {
  return (
    <>
        <div className="col-md-2">
            <Link className="linked-title" to={`/itemdetails/${item.id}/${item.media_type}`}>
            <div className="movie position-relative">
           {item.poster_path?<img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
            />:<img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
            />}
            
            
            <h3 className="h6 my-4 text-center">{item.title} {item.name}</h3>
            {item.vote_average?<div className="vote position-absolute top-0 end-0 text-white p-2">
                {item.vote_average?.toFixed(1)}
            </div>:''}
            
            </div>
            </Link>
        </div>
    </>
  );
}
