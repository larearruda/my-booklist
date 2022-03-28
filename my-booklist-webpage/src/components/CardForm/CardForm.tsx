import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Book } from '../../model/book';
import { addBook, getAllBooks, updateBook } from '../../services/service';
import { Container, InputRow } from './CardForm.styles'

interface CardFormProps {
  setShowForm: () => void;
  isUpdateForm: boolean;
  book?: Book;
}

export function getDateTimeFormat(){
  return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

const CardForm: React.FunctionComponent<CardFormProps> = ({setShowForm, isUpdateForm, book}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('');
  const [score, setScore] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    loadBookDataFromUpdate();

  }, []);

  const loadBookDataFromUpdate = () => {
    if(book !== undefined) {
      setTitle(book.title);
      setAuthor(book.author);
      setStatus(book.status);
      setScore(book.score + '');
    }
  }
  
  const onSubmit  = async () => {
    let insertBook: Book = {
      title: title,
      author: author,
      status: status,
      datecreated: getDateTimeFormat(),
      score: score + '',
    };
    console.log(JSON.stringify(book));
    const response = await addBook(insertBook);
    if(response.sucess) { 
      reloadBookList();
      setShowForm();
    }
  }

  const onUpdate = async () => {
    let update: Book = {
      id: book ? book.id : 0,
      title: title,
      author: author,
      status: status,
      datecreated: book?.datecreated?.replace(/T/, ' ').replace(/\..+/, ''),
      score: score + '',
      datecompleted: getDateTimeFormat(),
    };
    console.log(JSON.stringify(book));
    const response = await updateBook(update);
    if(response.sucess) { 
      reloadBookList();
      setShowForm();
    }
  }

  const reloadBookList = async () => {
    const loadedBooks: Book[] = await getAllBooks();
    dispatch({
      type: 'SET_BOOKS_LIST',
      payload: loadedBooks,
    })
  }

  return (<> 
    <form onSubmit={onSubmit}>
      <InputRow>
        <input type="text" placeholder='Título' value={title} onChange={e => setTitle(e.target.value)}/>
      </InputRow>
      <InputRow>
        <input type="text" placeholder='Autor' value={author} onChange={e => setAuthor(e.target.value)}/>
      </InputRow>
        <div className="radio">
          <label>
            <input 
              type="radio"
              value="todo"
              checked={status === 'todo'} 
              onChange={e => setStatus(e.target.value)} />
            Quero ler
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="doing" 
              checked={status === 'doing'} 
              onChange={e => setStatus(e.target.value)} />
            Lendo
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="done" 
              checked={status === 'done'} 
              onChange={e => setStatus(e.target.value)} />
            Lido
          </label>
        </div>
      <InputRow>
        <input 
          type="number"
          placeholder='Nota'
          value={score}
          onChange={e => setScore(e.target.value)}
          hidden={status !== 'done'} 
        />
      </InputRow>
        <input type="button" value="Back" onClick={(setShowForm)}/>
        <input hidden={isUpdateForm} type="button" value="Cadastrar" onClick={(onSubmit)}/>
        <input hidden={!isUpdateForm} type="button" value="Atualizar" onClick={(onUpdate)}/>
      </form>
  </>)

};

export default CardForm;