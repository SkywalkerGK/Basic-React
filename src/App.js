import './App.css';
import AppHeader from './components/AppHeader';
import TattooPost from './components/TattooPost';
import Tattooitem from './components/Tattooitem';
import tattoos from './components/data/tattoos';


function App() {
  const tattooElements = tattoos.map((tattoo,index) => {
    return <Tattooitem key = {index} tattoo={tattoo} />
  })
  return (
    <div className="App">

      <AppHeader />
      <div className='app-grid'>
        {tattooElements}
      </div>

    </div>
  );
}

export default App;
