import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
im
const rootReducer = combineReducers({
  books: booksReducer
});

export default rootReducer;