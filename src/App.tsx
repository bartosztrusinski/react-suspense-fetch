import { Suspense } from 'react';
import Author from './author/Author';
import AuthorWithSuspense from './author/AuthorWithSuspense';
import AuthorSkeleton from './author/AuthorSkeleton';
import Posts from './post/Posts';

export default function App() {
  return (
    <main>
      <Author />
      <Suspense fallback={<AuthorSkeleton />}>
        <AuthorWithSuspense />
      </Suspense>
      <section>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </section>
    </main>
  );
}
