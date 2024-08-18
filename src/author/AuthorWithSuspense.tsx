import { fetchUser } from '../utils/fetchUser';
import { wrapPromise } from '../utils/wrapPromise';

const { read: getUser } = wrapPromise(fetchUser(5));

export default function Author() {
  const author = getUser();

  return (
    <section className='author'>
      <h1 className='author__name'>Created by {author.name}</h1>
      <p className='author__username'>{author.username}</p>
    </section>
  );
}
