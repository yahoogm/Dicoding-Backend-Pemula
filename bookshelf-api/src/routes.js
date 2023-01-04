const {
  addBookHandler,
  getBooksHandler,
  getBookByIdHandler,
  editBookById,
  deleteBookByIdHandle,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandle,
  },
];

module.exports = routes;
