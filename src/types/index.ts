export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;
  value?: string;
}