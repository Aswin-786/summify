import Hero from '../src/components/Hero'
import Demo from '../src/components/Demo'
import './App.css';

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>
      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
