import logo from './logo.svg';
import './App.css';
import {getAllBooks, addBook, deleteBookBy} from './services/service.ts'

function App() {

  getAllBooks().then((res) => console.log('teste', res))

  let novoLivro = {
    title: 'titulo pelo front',
    author: 'larissa arruda',
    datecreated: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
  }
  addBook(novoLivro).then((res) => console.log('adicionar novo livro', res));
  deleteBookBy(Math.floor(Math.random() * 90) + 1).then((res) => console.log('deletar livro', res));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
