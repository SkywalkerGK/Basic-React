import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooPost from './components/TattooPost';
import Tattooitem from './components/Tattooitem';
import tattoos from './components/data/tattoos';
import AppSearch from './components/AppSearch';


function App() {
  const [selectedTattoo,setSeclectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onTattooOpenClick(theTattoo){
    setSeclectedTattoo(theTattoo);
  }

  function onTattooCloseClick(){
    setSeclectedTattoo(null);
  }
  const tattooElements = tattoos.filter((tattoo)=> {
    return tattoo.title.includes(searchText);
  }).map((tattoo,index) => {
    return <Tattooitem key = {index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />
  });

  let tattooPost = null;
  if(!!selectedTattoo){
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
  }

  return (
    <div className="App">

      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {tattooElements}
          </div>
        </div>
      </section>
      {tattooPost}

    </div>
  );
}

export default App;
