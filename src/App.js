
import './App.css';
import Banner from './Components/banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

import {originals,action} from './urls';
function App() {

  
  return (
    <div className="App">
     <NavBar/>
     <Banner  />
     <RowPost url={originals} title="Netflix Trending" />
     <RowPost url={action} title="Actions" isSmall />
    </div>
  );
}

export default App;
