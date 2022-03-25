const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'J@wnM5E#AQndswT',
    database : 'my_booklist_db'
  });

module.exports.setupDatabase = () => { 
    return new Promise((resolve, reject) => {
        let bookTable = `
            CREATE TABLE IF NOT EXISTS
            book
            (
                id int primary key auto_increment,
                title varchar(255) not null,
                author varchar(255) not null,
                datecreated datetime not null,
                datecompleted datetime,
                score int,
                status varchar(8)
            )
        `;
        
        connection.query(bookTable, function(err, results, fields) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            resolve(true);
        });
    });
};

module.exports.insertInitialData = () => { 
    return new Promise((resolve, reject) => {
        let datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        let bookTable = `
            INSERT INTO book (title, author, datecreated) VALUES
            ('Lord of the Rings', 'J. R. R. Tolkien', '${datetime}'),
            ('Harry Potter', 'J. K. Rowling', '${datetime}')
            ;
        `;
        
        connection.query(bookTable, function(err, results, fields) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            resolve(true);
        });
    });
}

module.exports.getAllBooks = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM book', (err,rows) => {
            if(err) reject(err);

            resolve(rows);
          });
    });
} 

module.exports.insertNewBook = (book) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO book SET ?', book, (err,rows) => {
            if(err) reject(err);

            resolve(rows);
          });
    });
}


module.exports.deleteBookById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM book WHERE id = ?', id, (err,rows) => {
            if(err) reject(err);

            resolve(rows);
          });
    });
}