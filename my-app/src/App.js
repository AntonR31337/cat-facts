import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dataCats } from './store/reducer';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';
import Title from './components/Title';
import { SortButton } from './components/styledComponentsStyles';

function App() {

  const dispatch = useDispatch();

  const [isSorted, setIsSorted] = useState(false);

  const requestUrl = "https://meowfacts.herokuapp.com/?count=12";
  const catFacts = useSelector((state) => state.cats.data);
  
  const changeResult = (data) => {
    const newData = [];

    data.map((el) => {

      newData.push({
        id: uniqid(),
        text: el,
        like: false,
        img: "https://i.pinimg.com/736x/86/ad/eb/86adebc9027efa836a642df9a19dfa42.jpg"
      });
    });
    return newData
  }

  useEffect(() => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(result => {
        dispatch(dataCats(changeResult(result.data)))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Title>Interested cat facts</Title>
        <SortButton onClick={() => setIsSorted(!isSorted)}>{isSorted ? "Показать все" : "Только избранные"}</SortButton>
      </header>
      <main className='main'>
        {isSorted
          ? catFacts.map(catFact => {
            if (catFact.like === true) {
              return <Card
                  key={catFact.id}
                  data={catFact}
                />
            }
          })
          : catFacts.map(catFact => <Card
                key={catFact.id}
                data={catFact}
              />)
        }
      </main>
    </div>
  );
}

export default App;
