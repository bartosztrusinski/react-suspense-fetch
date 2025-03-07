import { useEffect, useState } from 'react';
import { fetchAuthor, type Author } from './fetchAuthor';
import AuthorSkeleton from './AuthorSkeleton';
import { delayPromise } from '../utils/delayPromise';

export default function Author() {
  const [author, setAuthor] = useState<Author>();
  const [isLoading, setIsLoading] = useState(true);

  // fetch author as side effect - start fetching after render creating waterfall
  useEffect(() => {
    setIsLoading(true);

    delayPromise(fetchAuthor(2), 1000)
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
