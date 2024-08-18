import { useEffect, useState } from 'react';
import { fetchUser, User } from '../utils/fetchUser';

export default function Author() {
  const [author, setAuthor] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetchUser(2)
      .then((user) => setAuthor(user))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading || !author) {
    return (
      <section className='author'>
        <p>Loading author...</p>
      </section>
    );
  }

  return (
    <section className='author'>
      <h1 className='author__name'>Created by {author.name}</h1>
      <p className='author__username'>{author.username}</p>
    </section>
  );
}
