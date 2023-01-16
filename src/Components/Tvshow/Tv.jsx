import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { mediaContext } from '../../Context/MediaStore';
import Loading from '../Loading/Loading';
import MediaItem from '../MediaItem/MediaItem';

export default function Tv() {

let {trendingTv}=useContext(mediaContext)
  return (
    <>
    {trendingTv.length > 0 ?
    <div className="row my-5">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tv Shows</title>
    </Helmet>
    <div className="col-md-4  d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">Trending <br /> Tv <br /> To Watch Right Now</h2>
            <p className="py-2 text-muted"> Most Watched Movies By Days</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>
      {trendingTv.map((item,index)=><MediaItem item={item} key={index}/>)}
    
    </div>:<Loading/>}
    
    
    </>
  )
}
