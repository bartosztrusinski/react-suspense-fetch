import { Suspense } from 'react';
import Author from './author/Author';
import AuthorWithSuspense from './author/AuthorWithSuspense';
import Posts from './post/Posts';

export default function App() {
  return (
    <main>
      <section>
        <Author />
      </section>
      <section>
        <Suspense fallback={<p>Loading author...</p>}>
          <AuthorWithSuspense />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </section>
    </main>
  );
}
