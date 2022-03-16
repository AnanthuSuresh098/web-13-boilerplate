import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import axios from "axios";
import { getMovieData } from "../Redux/actions";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const dispatch = useDispatch();
  const {data,isError,isLoading}=useSelector((state)=>({
    data:state.data,
    isError:state.isError,
    isLoading:state.isLoading
  }))

  //   // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    dispatch(getMovieData());
  }, [dispatch]);

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {/* map through the filter  */}
        {genres.map((e) => {
          return <option value={e}>{e}</option>;
        })}
      </select>
      <div className="movies-list">
        {/* map throught th movie list and display the results */}
          {isLoading && <h1>Loading.....</h1>}
          {isError && <h1>Error</h1>}
          {!isLoading && !isError && data[0] && data[0].map((item)=>{
            return(
              <>
                   <h1>{item.movie_name}</h1>
                   <img src={item.image_url} alt="" />
                   <h2>{item.genre}</h2>
              </>
            )
          })}
      </div>
    </>
  );
};
