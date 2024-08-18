import { fetchPosts } from '../utils/fetchPosts';
import { wrapPromise } from '../utils/wrapPromise';

const { read: getPosts } = wrapPromise(fetchPosts());

export default function Posts() {
  const posts = getPosts();

  return posts.map((post) => (
    <article key={post.id} className='post'>
      <h2 className='post__title'>{post.title}</h2>
      <p className='post__body'>{post.body}</p>
      <button className='post__button'>Read more</button>
    </article>
  ));
}
