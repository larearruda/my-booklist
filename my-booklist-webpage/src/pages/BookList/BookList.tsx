import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../components/Card';
import {getAllBooks} from '../../services/service'
import { Book } from '../../model/book';
import { Wrapper } from './BookList.styles';
import { useDispatch, useSelector, useStore } from 'react-redux';

const BookList = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const books = useSelector((state: any) => state.booksReducer);


  useEffect(() => {
  }, []);

  //todo: adicionar deleçao aqui

  //todo: adicionar update aqui 

  

  return (
    <Wrapper>
      {books.map((book: any, index: any) => <Card key={index} isBookCard={true} book={book} /> )}
      <Card isBookCard={false} book={books[0]}/>
    </Wrapper>
  );
}

export default BookList;