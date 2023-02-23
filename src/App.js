import './App.css';
import Card from './components/Card';

const MoviesData = [
  {
    Title:"Puss in Boots: The Last Wish",
    Year:"2022",
    Director:"Joel Crawford",
    Runtime:"104min",
    Genre:"Adventure, Comedy",
    Description:"M3GAN is a marvel of artificial intelligence, a lifelike doll that's programmed to be a child's greatest companion and a parent's greatest ally. Designed by Gemma, a brilliant roboticist, M3GAN can listen, watch and learn as it plays the role of friend and teacher, playmate and protector...",
    TitleCard:"https://image.tmdb.org/t/p/w185/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
    CoverImg:"https://images4.alphacoders.com/129/1297183.jpg",
  },
  {
    Title:"M3GAN",
    Year:"2022",
    Director:"Gerard Johnstone",
    Runtime:"102min",
    Genre:"Horroe, Thriller, Science ficition, Mystery",
    Description:"Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    TitleCard:"https://i.imgur.com/aktweat.jpeg",
    CoverImg:"https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/m3gan-movie-review-2023/m3gan-movie-review-2023.jpeg",
  },
  {
    Title:"Avatar: The Way of Water",
    Year:"2022",
    Director:"James Cameron",
    Runtime:"192min",
    Genre:"Action, Thriller, Science ficition, Fantasy, Drama, Adventure",
    Description:"Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    TitleCard:"https://i.imgur.com/wgbrauX.jpeg",
    CoverImg:"https://images2.alphacoders.com/129/1294459.jpg",
  },
]

const movie_cards = MoviesData.map((datas)=>{
  return <Card data = {datas}/>
})

function App() {
  return (
    <div className="App">
      {/* <Card data = {MoviesData}/> */}
      {movie_cards}    
    </div>
  );
}

export default App;
