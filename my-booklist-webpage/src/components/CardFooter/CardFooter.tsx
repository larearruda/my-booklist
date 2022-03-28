import React from 'react';
import {Footer} from './CardFooter.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { deleteBookById, getAllBooks } from '../../services/service';
import { Book } from '../../model/book';
import { useDispatch } from 'react-redux';

interface CardFooterProps {
  book: Book;
  setShowForm: () => void;
}

const CardFooter: React.FunctionComponent<CardFooterProps> = ({book, setShowForm}) => {

  const dispatch = useDispatch();

  const deleteBook  = async () => {
    const response = await deleteBookById(book.id ? book.id : 0);
    reloadBookList();
  }
  const updateBook = async () => {
    setShowForm();
  }

  const reloadBookList = async () => {
    const loadedBooks: Book[] = await getAllBooks();
    dispatch({
      type: 'SET_BOOKS_LIST',
      payload: loadedBooks,
    })
  }


  return (<>
    <Footer>
      <div> 
        <FontAwesomeIcon 
          icon={faTrashCan}
          size="2x"
          color="#073b4c"
          onClick={deleteBook}/>
      </div>
      <div> 
        <FontAwesomeIcon 
          icon={faPencil}
          size="2x"
          color="#073b4c"
          onClick={updateBook}/>
      </div>
    </Footer>
    </>
  );
}

export default CardFooter;