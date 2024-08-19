import { Suspense } from 'react';
import Author from './author/Author';
import AuthorWithEffect from './author/AuthorWithEffect';
import AuthorSkeleton from './author/AuthorSkeleton';
import Posts from './post/Posts';
import PostsSkeleton from './post/PostsSkeleton';

export default function App() {
  return (
    <main>
      <AuthorWithEffect />
      <Suspense fallback={<AuthorSkeleton />}>
        <Author />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </main>
  );
}
