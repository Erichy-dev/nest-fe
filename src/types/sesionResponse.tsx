import { User } from './user';

export interface SessionResponse {
  access_token: string;
  user: User;
}
