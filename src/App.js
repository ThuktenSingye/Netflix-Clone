import './App.css';
import Row from './components/Row';
import requests from './request'
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
        {/* Nav */}
        {/* Banner */}
        <Banner />
        <Row title="NETWORK ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/> 
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaris}/>
        
    </div>
  );
}

export default App;
