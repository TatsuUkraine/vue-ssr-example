import { Http } from '@/service'
import AuthorAPI from './Authors'
import BooksAPI from './Books'

export const Authors = new AuthorAPI(Http);
export const Books = new BooksAPI(Http);