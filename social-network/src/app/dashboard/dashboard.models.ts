import { Preferences, Auth } from '../auth/auth.models';

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

export interface Friend {
  uuid: string;
  avatarUrl: string;
  fullName: string;
  request: FriendRequest;
  preferences: Preferences;
}

export interface FriendRequest {
  uuid: string;
  confirmed: boolean;
  createdAt: number;
  confirmedAt: number;
  rejectedAt: number;
}

export interface Friends {
  friends: Friend[];
  userSearch: Auth[];
  requests: Friend[];
}
