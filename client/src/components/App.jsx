import '../styles/App.css';
import Navbar from './Navbar';
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Navbar menu={menu} setMenu={setMenu}/>
    </div>
  );
}

export default App;
