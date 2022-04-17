import React, { useEffect } from "react";
import MovieApi from "../../common/apis/MovieApi";
import Movielistening from "../MovieListing/MovieListing";
import MovieListing from "../MovieListing/MovieListing";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      console.log("THE response from API", response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div className="banner-img">
      <Movielistening />
    </div>
  );
};

export default Home;
