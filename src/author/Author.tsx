import { fetchAuthor } from './fetchAuthor';
import { wrapPromise } from '../utils/wrapPromise';
import { delayPromise } from '../utils/delayPromise';

// use wrapper to handle a promise within suspense
const { read: getUser } = wrapPromise(delayPromise(fetchAuthor(5), 1500));

export default function Author() {
  const author = getUser();

  return (
    <section className='author'>
      <h1 className='author__name'>Created by {author.name}</h1>
      <p className='author__username'>{author.username}</p>
    </section>
  );
}
