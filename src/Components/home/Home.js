import React, { useEffect } from "react";
import "./home.css";
import Container from "../Movie_container/Container";

function Home({ data, modalData, setModalData, setIsOpen }) {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=ba71b8936e3a0054c078595cbbb6bbc4";

  return (
    <div className="home">
      {data ? (
        <>
          <h2>Most Recent Movies</h2>
          <div className="home_items">
            {data &&
              data.results.length > 0 &&
              data.results.map((data) => (
                <Container
                  rate={data.vote_average}
                  title={data.original_title}
                  posterImg={data.poster_path}
                  key={data.id}
                  data={data}
                  setModalData={setModalData}
                  setIsOpen={setIsOpen}
                />
              ))}
          </div>
        </>
      ) : (
        <h4>Loading......</h4>
      )}
    </div>
  );
}

export default Home;
