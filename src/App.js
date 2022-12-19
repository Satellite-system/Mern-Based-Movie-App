import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {
  
  const data1 = {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/A2XhlMUimRDViZDuJPeDtaJoHmT.jpg",
        "genre_ids": [
          16,
          35
        ],
        "id": 1015602,
        "original_language": "en",
        "original_title": "Welcome to the Club",
        "overview": "Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.",
        "popularity": 138.661,
        "poster_path": "/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
        "release_date": "2022-09-08",
        "title": "Welcome to the Club",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 119
      },
      {
        "adult": false,
        "backdrop_path": "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
        "genre_ids": [
          27,
          878,
          28
        ],
        "id": 460458,
        "original_language": "en",
        "original_title": "Resident Evil: Welcome to Raccoon City",
        "overview": "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
        "popularity": 110.147,
        "poster_path": "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
        "release_date": "2021-11-24",
        "title": "Resident Evil: Welcome to Raccoon City",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 1902
      },
      {
        "adult": false,
        "backdrop_path": "/zJDMuXQDraHjtF53wikmyBQIcYe.jpg",
        "genre_ids": [
          12,
          28,
          35,
          14
        ],
        "id": 353486,
        "original_language": "en",
        "original_title": "Jumanji: Welcome to the Jungle",
        "overview": "Four teenagers in detention discover an old video game console with a game they’ve never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars. They’ll have to complete the adventure of their lives filled with fun, thrills and danger or be stuck in the game forever!",
        "popularity": 54.369,
        "poster_path": "/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
        "release_date": "2017-12-09",
        "title": "Jumanji: Welcome to the Jungle",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 12141
      },
      {
        "adult": false,
        "backdrop_path": "/oYStcIMgYyFTxT1GM7EpqcwGRcW.jpg",
        "genre_ids": [
          10752,
          18,
          36
        ],
        "id": 14905,
        "original_language": "en",
        "original_title": "Welcome to Sarajevo",
        "overview": "Follow a group of international journalists into the heart of the once cosmopolitan city of Sarajevo—now a danger zone of sniper and mortar attacks where residents still live. While reporting on an American aid worker who’s trying to get children out of the country, a British correspondent decides to take an orphaned girl home to London.",
        "popularity": 6.961,
        "poster_path": "/bGdDqsFCF0v9M5mB77fAF8vJMsy.jpg",
        "release_date": "1997-05-09",
        "title": "Welcome to Sarajevo",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 80
      }
    ],
    "total_pages": 31,
    "total_results": 619
  }
  
  const [data, setData] = useState(data1)

  useEffect(() => {
    console.log("data Changed");
  }, [data])
  

  return (
    <div className="App">
      <Header data={data} setData={setData}/>
      <Home data={data} />
    </div>
  );
}

export default App;
