import { useEffect, useState } from 'react';
import { fetchUser, User } from '../utils/fetchUser';
import AuthorSkeleton from './AuthorSkeleton';
import { delayPromise } from '../utils/delayPromise';

export default function Author() {
  const [author, setAuthor] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    delayPromise(fetchUser(2), 1000)
      .then((user) => setAuthor(user))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading || !author) {
    return <AuthorSkeleton />;
  }

  return (
    <section className='author'>
      <h1 className='author__name'>Created by {author.name}</h1>
      <p className='author__username'>{author.username}</p>
    </section>
  );
}
