import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';
import { User } from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) { }

  auth(authType: AuthType, data: AuthDTO): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }


  login(authData: AuthDTO) {
    return this.auth('login', authData);
  }

  register(authData: AuthDTO) {
    return this.auth('register', authData);
  }

  whoami() {
    return this.http.get(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  get token() {
    return localStorage.getItem('idea_token');
  }

  set token(token: string) {
    if (token) {
      localStorage.setItem('idea_token', token);
    } else {
      localStorage.clear();
    }


  }

}
