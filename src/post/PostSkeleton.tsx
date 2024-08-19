import type { Post } from '../utils/fetchPosts';

export default function Post() {
  return (
    <article className='post'>
      <div className='post__title'>
        <div className='post__title--skeleton'></div>
        <div className='post__title--skeleton'></div>
      </div>
      <div className='post__body'>
        <div className='post__body--skeleton'></div>
        <div className='post__body--skeleton'></div>
        <div className='post__body--skeleton'></div>
      </div>
      <button disabled className='post__button post__button--skeleton'>
        Read more
      </button>
    </article>
  );
}
