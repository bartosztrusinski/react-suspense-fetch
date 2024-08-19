import { fetchPosts } from './fetchPosts';
import { wrapPromise } from '../utils/wrapPromise';
import { delayPromise } from '../utils/delayPromise';
import Post from './Post';

const { read: getPosts } = wrapPromise(delayPromise(fetchPosts(), 2000));

export default function Posts() {
  const posts = getPosts();

  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
}
