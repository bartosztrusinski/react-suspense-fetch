import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const userUrl = new URL('https://jsonplaceholder.typicode.com/users/2');
const fetcher = <T,>(url: URL): Promise<T> =>
  fetch(url).then((res) => res.json());

export default function Author() {
  const [author, setAuthor] = useState<User>();

  useEffect(() => {
    fetcher<User>(userUrl).then((author) => setAuthor(author));
  }, []);

  if (!author) {
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
