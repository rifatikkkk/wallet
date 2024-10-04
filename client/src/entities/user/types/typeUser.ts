export type User = {
  id: number | string | undefined;
  username: string | undefined;
  email: string | undefined;
  address: string | undefined;
};

export type Users = {
  items: User[] | undefined;
};
