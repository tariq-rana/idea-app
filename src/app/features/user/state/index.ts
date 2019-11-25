import * as Store from '@app/store/app-store.module';
import { User } from '@app/models/user';

export interface UserState {
  users: User[];
  loading: boolean;
  loaded: boolean;
  page: number;
}

export interface AppState extends Store.AppState {
  users: UserState;
}