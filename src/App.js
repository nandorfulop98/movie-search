import AppBar from "./components/AppBar";
import MainPage from "./containers/MainPage";
import MovieList from "./components/MovieList";

function App() {
  return (
    <MainPage>
      <AppBar />
      <MovieList />
    </MainPage>
  );
}

export default App;
