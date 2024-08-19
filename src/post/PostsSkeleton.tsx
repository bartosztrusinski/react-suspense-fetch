import PostSkeleton from './PostSkeleton';

export default function PostsSkeleton() {
  return (
    <section>
      {Array.from({ length: 10 }).map((_, index) => (
        <PostSkeleton key={index} />
      ))}
    </section>
  );
}
