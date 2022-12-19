import React, { useEffect, useState } from "react";
import "./header.css";
import icon from "../../Assets/icon_bar.png";
import Lens from "../../Assets/Union.png";
import axios from "axios";

function Header({ data, setData }) {
  const [movie, setMovie] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const clickEvent = () => {
    console.log("Submitted", movie);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (event) => {
    if (event.key == "Enter") {
      clickEvent();
    }
  };

  return (
    <div className="header">
      <img src={icon} alt="" className="header_img" />
      <div className="header_searchBx">
        <img src={Lens} alt="" onClick={clickEvent} />
        <input
          type="text"
          placeholder="Search for a movie"
          name="movie"
          value={movie}
          onChange={handleChange}
          onKeyDown={onSubmit}
        />
      </div>
    </div>
  );
}

export default Header;
