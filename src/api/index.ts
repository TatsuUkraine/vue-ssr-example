import { Http } from '@/service'
import AuthorAPI from './Authors'
import BooksAPI from './Books'

const Authors = new AuthorAPI(Http);
const Books = new BooksAPI(Http);

export {
    Authors,
    Books
}