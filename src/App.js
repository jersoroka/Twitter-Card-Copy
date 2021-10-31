import './App.css';
import { useContext } from 'react';
import { SocialCard } from './components/SocialCard';
import { GlobalContext } from './context/GlobalContext';
import { OptionsMenu } from './components/menus/OptionsMenu';

function App() {
  const {isOptionsMenuOpen, setIsOptionsMenuOpen} = useContext(GlobalContext);

  return (
      <div className="App">
        <SocialCard />
        {isOptionsMenuOpen && <OptionsMenu/>}
      </div>
  );
}

export default App;
