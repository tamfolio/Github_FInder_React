import './App.css';
import Profile from './components/Profile';
import Logo from './Logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
      </header>
      <Profile/>
    </div>
  );
}

export default App;
