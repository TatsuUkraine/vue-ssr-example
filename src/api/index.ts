import { AxiosHttp } from '@/service'
import AuthorAPI from './Authors'
import BooksAPI from './Books'

const Authors = new AuthorAPI(AxiosHttp);
const Books = new BooksAPI(AxiosHttp);

export {
    Authors,
    Books
}