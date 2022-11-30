import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dataCats } from './store/reducer';
import { useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';

function App() {

  const dispatch = useDispatch();

  const requestUrl = "https://meowfacts.herokuapp.com/?count=20";
  const catFacts = useSelector((state) => state.cats.data);

    useEffect(() => {
      fetch(requestUrl)
        .then(response => response.json())
        .then(result => {
          dispatch(dataCats(result.data))
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <main className='main'>
        {catFacts.map(catFact => <Card key={uniqid()} data={catFact} />)}
      </main>
    </div>
  );
}

export default App;
