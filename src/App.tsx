import { Suspense } from 'react';
import Author from './author/Author';
import AuthorWithSuspense from './author/AuthorWithSuspense';
import AuthorSkeleton from './author/AuthorSkeleton';
import Posts from './post/Posts';
import PostsSkeleton from './post/PostsSkeleton';

export default function App() {
  return (
    <main>
      <Author />
      <Suspense fallback={<AuthorSkeleton />}>
        <AuthorWithSuspense />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </main>
  );
}
