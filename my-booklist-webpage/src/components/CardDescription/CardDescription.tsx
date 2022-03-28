import React, { useState } from 'react';
import { Book } from '../../model/book';
import CardFooter from '../CardFooter';
import CardForm from '../CardForm';
import CardHeader from '../CardHeader';
import {Container, Row} from './CardDescription.styles';

interface CardDescriptionProps {
  book: Book;
}

const CardDescription: React.FC<CardDescriptionProps> = ({book}) => {
  const [showForm, setShowForm] = useState(false);

  function showUpdateForm(){
    setShowForm(true);
  }

  function hideForm(){
    setShowForm(false);
  }

  function getStatus(status: string){
    switch(status){
      case 'done':
        return 'Lido';

      case 'doing':
        return 'Lendo';

      case 'todo':
        return 'Quero ler';
    }
  }


  return (<>
    <CardHeader color={book.status} title={book?.title}/>
    {/* <CardImage imageUrl={book.imageUrl} /> */}
    <Container>
      {!showForm && (
        <>
          <Row>{book.title}</Row>
          <Row>{book.author}</Row>
          <Row>{book.datecreated?.replace(/T/, ' ').replace(/\..+/, '')}</Row>
          <Row>{getStatus(book.status)}</Row>
          {book.status === 'done' && (
            <Row>Nota: {book.score}</Row>
          )}
          <CardFooter book={book} setShowForm={showUpdateForm} />
        </>

      )}
      
      {showForm && (
        <CardForm setShowForm={hideForm} isUpdateForm={true} book={book}/>
      )}
    </Container>
  </>);
}

export default CardDescription;