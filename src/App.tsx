import { Suspense } from 'react';
import Author from './author/Author';
import AuthorWithSuspense from './author/AuthorWithSuspense';

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
      <section></section>
    </main>
  );
}
