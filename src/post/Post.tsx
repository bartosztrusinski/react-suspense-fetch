import type { Post } from '../utils/fetchPosts';

export default function Post({ id, body, title }: Post) {
  return (
    <article key={id} className='post'>
      <h2 className='post__title'>{title}</h2>
      <p className='post__body'>{body}</p>
      <button className='post__button'>Read more</button>
    </article>
  );
}
