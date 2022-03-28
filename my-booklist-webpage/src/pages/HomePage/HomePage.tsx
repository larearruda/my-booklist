import React from 'react';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Book } from '../../model/book';
import { getAllBooks } from '../../services/service';
import BookList from '../BookList';
import MainMenu from '../MainMenu';
import {Wrapper} from './HomePage.styles';

const HomePage = () => {
  const store = useStore();
  useEffect(() =>{
    loadBooks();
  }, [])
  
  const loadBooks = async () => {
    const loadedBooks: Book[] = await getAllBooks();
    store.dispatch({
      type: 'SET_BOOKS_LIST',
      payload: loadedBooks,
    })
  };
    return (
    <Wrapper>
      {/* <MainMenu /> */}
      <BookList />
    </Wrapper>);
}

export default HomePage;