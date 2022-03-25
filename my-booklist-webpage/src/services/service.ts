import axios from 'axios';
import { Book } from '../model/book';

const ApiHttp = axios.create({
    baseURL:
        'http://localhost:3001/',
});

export const getAllBooks = async (): Promise<any> => {
    const response = await ApiHttp.get('/books',
      {headers: {'Content-type': 'application/json'}},
    );
  
    if (response.status === 200) {
        const books = [];
        for (const data of response.data) {
            const book = data as Book;
            books.push(book);
          }

        return books;
    } else {
        throw 'Error api do not response the expected' + response;
    }
};

export const addBook = async (book: Object): Promise<any> => {
    const response = await ApiHttp.post('/books',
        {book},
        {headers: {'Content-type': 'application/json'}},
    );

    if (response.status === 200) {
        return {sucess: true};
    } else {
        throw 'Error api do not response the expected' + response;
    }
}

export const deleteBookBy = async (id: string): Promise<any> => {
    const response = await ApiHttp.post('/books',
        {id},
        {headers: {'Content-type': 'application/json'}},
    );

    if (response.status === 200) {
        return {sucess: true};
    } else {
        throw 'Error api do not response the expected' + response;
    }
}