import { fetchPosts } from '../utils/fetchPosts';
import { wrapPromise } from '../utils/wrapPromise';
import Post from './Post';

const { read: getPosts } = wrapPromise(fetchPosts());

export default function Posts() {
  const posts = getPosts();

  return (
    <section>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </section>
  );
}
