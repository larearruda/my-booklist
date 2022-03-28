import React from 'react';
import { Book } from '../../model/book';
import AddButton from '../CardForm';
import CardDescription from '../CardDescription/CardDescription';
import {ContainerDescription, ContainerAddBook} from './Card.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CardForm from '../CardForm';
import { useState } from 'react';

interface CardProps {
  isBookCard: boolean;
  book: Book;
}

const Card: React.FunctionComponent<CardProps> = ({
  isBookCard = true,
  book,
}) => {
  const [showForm, setShowForm] = useState(false);
  function onOpenForm(){
    console.log('clicou para adicionar')
    setShowForm(true);
  }

  function hideForm(){
    setShowForm(false);
    console.log('clicou para esconder')
  }

  return (<>
    {isBookCard && (
      <ContainerDescription>
        <CardDescription book={book} />
      </ContainerDescription>
    )}
    {!isBookCard && (
      <ContainerAddBook >  
        {!showForm && (
          <FontAwesomeIcon onClick={onOpenForm} icon={faPlusCircle} size="3x" color="#073b4c"/>
        )}
        
        {showForm && (
          <CardForm setShowForm={hideForm} isUpdateForm={false}/> 

        )}
      </ContainerAddBook>
    )}
  </>);
}

export default Card;