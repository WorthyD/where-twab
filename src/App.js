import './App.css';
import WhereTwabButton from './components/where-twab-button';

function App() {
  return (
    <>
      <main className="main">
        <WhereTwabButton></WhereTwabButton>
      </main>
      <footer>
        Not affiliated with Bungie. Please be kind. -{' '}
        <a href="https://twitter.com/worthyd" target="_blank" rel="noreferrer">
          @WorthyD
        </a>
      </footer>
    </>
  );
}

export default App;
