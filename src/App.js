import './App.css';
import { SocialCard } from './components/SocialCard';
import { GlobalContextProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <SocialCard />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
