import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import axios from "axios";
import Modal from "react-modal";
import cross from "./Assets/cross.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "50%",
  },
};

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");
  const [modalData, setModalData] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const date = new Date();
    let year = date.getFullYear();

    console.log("data Changed");
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&primary_release_date.lte=${year}&vote_count.gte=10`
      )
      .then((res) => {
        setData(res.data);
      });
  },[]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getDateFormatted = (date) => {
    var today = new Date(date);
    const month = today.toLocaleString("default", { month: "long" });
    const datNum = today.getDate();
    const year = today.getFullYear();
    return month + " " + datNum + ", " + year;
  };

  return (
    <div className="App">
      <Header data={data} setData={setData} />
      <Home
        data={data}
        modalData={modalData}
        setModalData={setModalData}
        setIsOpen={setIsOpen}
      />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="AppUpperBx">
          <h2>{modalData.original_title}</h2>
          <img src={cross} alt="Close" onClick={closeModal} />
        </div>
        <div className="AppCenterBx">
          <img
            src={`https://image.tmdb.org/t/p/original${modalData.poster_path}`}
            alt=""
          />

          <div className="AppRightBx">
            {/* <span>
              <b>Release date:</b> {modalData.release_date}
            </span> */}
            <span>
              <b>Release date:</b> {getDateFormatted(modalData.release_date)}
            </span>
            <p>{modalData.overview}</p>
            <span>
              <b>{modalData.vote_average}</b>/10 ({modalData.vote_count} total
              votes)
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
