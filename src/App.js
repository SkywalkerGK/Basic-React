import './App.css';
import AppHeader from './components/AppHeader';
import TattooPost from './components/TattooPost';
import Tattooitem from './components/Tattooitem';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='app-grid'>
        <Tattooitem title='Docker' thumbnailUrl='/images/docker.png'/>
        <Tattooitem title='Laravel' thumbnailUrl='/images/laravel.png'/>
        <Tattooitem title='React' thumbnailUrl='/images/react.png'/>
        <Tattooitem title='MySQL' thumbnailUrl='/images/mysql.png'/>
      </div>
      

    </div>
  );
}

export default App;
