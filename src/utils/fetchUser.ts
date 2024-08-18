export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const usersUrl = new URL('https://jsonplaceholder.typicode.com/users');

const fetcher = <T>(url: URL): Promise<T> =>
  fetch(url).then((res) => res.json());

export const fetchUser = (id: number) => {
  return fetcher<User>(new URL(`${usersUrl}/${id}`));
};
