import type { Post } from './fetchPosts';

export default function Post({ body, title }: Post) {
  return (
    <article className='post'>
      <h2 className='post__title'>{title}</h2>
      <p className='post__body'>{body}</p>
      <button className='post__button'>Read more</button>
    </article>
  );
}
