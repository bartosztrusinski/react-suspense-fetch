import useSWR from 'swr';

export type Post = {
  id: number;
  title: string;
  body: string;
};

const postsUrl = new URL('https://jsonplaceholder.typicode.com/posts');

const fetcher = <T>(url: URL): Promise<T> =>
  fetch(url).then((res) => res.json());

export const fetchPosts = () => {
  return fetcher<Post[]>(new URL(`${postsUrl}`));
};

export const usePosts = () => {
  const { data } = useSWR<Post[]>(postsUrl, fetcher, {
    suspense: true,
  });

  return data as Post[];
};
