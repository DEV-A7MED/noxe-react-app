import React, { useContext } from "react";
import { mediaContext } from "../../Context/MediaStore";
import Loading from "../Loading/Loading";
import MediaItem from "../MediaItem/MediaItem";


export default function Home() {
 let{trendingMovies,trendingPeople,trendingTv}=useContext(mediaContext)

  return (
    <>
      {trendingMovies.length>0 &&trendingPeople.length>0 &&trendingTv.length>0 ?
      <div className="row py-5">
        <div className="col-md-4  d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">Trending <br /> Movies <br /> To Watch Right Now</h2>
            <p className="py-2 text-muted"> Most Watched Movies By Days</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>
        
        { trendingMovies.slice(0,10).map((item,index)=><MediaItem item={item} key={index}/>)}
      </div>:<Loading/>}
      
      {trendingMovies.length>0 &&trendingPeople.length>0 &&trendingTv.length>0 ?
      <div className="row py-5">
        <div className="col-md-4  d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">Trending <br /> Tv <br /> To Watch Right Now</h2>
            <p className="py-2 text-muted"> Most Watched Movies By Days</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>
        {trendingTv.slice(0,10).map((item,index)=><MediaItem item={item} key={index}/>)}

      </div>:<Loading/>}
      {trendingMovies.length>0 &&trendingPeople.length>0 &&trendingTv.length>0 ?

      <div className="row py-5">
        <div className="col-md-4  d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">Trending <br /> People <br /> To Watch Right Now</h2>
            <p className="py-2 text-muted"> Most Watched Movies By Days</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>
        {trendingPeople.filter((person)=>person.profile_path!==null).slice(0,10).map((item,index)=><MediaItem item={item} key={index}/>)}

      </div>:<Loading/>}
    </>
  );
}
