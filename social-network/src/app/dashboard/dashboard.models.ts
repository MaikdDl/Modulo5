export interface Post {
  likes: string[];
  author: Author;
  owner: Author;
  content: string;
  comments: Comment[];
  createdAt: number;
  id: string;
}

export interface Author {
  avatarUrl: string;
  fullName: string;
  uuid: string;
}

export interface Comment {
  author: Author;
  message: string;
  createdAt: number;
  id: string;
}

export interface PostRequest {
  content: string;
  uuid?: string;
}