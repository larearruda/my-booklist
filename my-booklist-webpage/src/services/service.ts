import axios from 'axios';
import { Book } from '../model/book';

const ApiHttp = axios.create({
    baseURL:
        'http://localhost:3001/',
});

export const getAllBooks = async (): Promise<Book[]> => {
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
        throw 'Error api did not respond as expected' + response;
    }
};

export const addBook = async (book: Book): Promise<any> => {
    const response = await ApiHttp.post('/books',
        {book},
        {headers: {'Content-type': 'application/json'}},
    );

    if (response.status === 200) {
        return {sucess: true};
    } else {
        throw 'Error api did not respond as expected' + response;
    }
}

export const updateBook = async (book: Book): Promise<any> => {
    const response = await ApiHttp.put('/books',
        {book},
        {headers: {'Content-type': 'application/json'}},
    );

    if (response.status === 200) {
        return {sucess: true};
    } else {
        throw 'Error api did not respond as expected' + response;
    }
}


export const deleteBookById = async (id: number): Promise<any> => {
    const response = await ApiHttp.delete('/books/' + id,
        {headers: {'Content-type': 'application/json'}},
    );

    if (response.status === 200) {
        return {sucess: true};
    } else {
        throw 'Error api did not respond as expected' + response;
    }
}