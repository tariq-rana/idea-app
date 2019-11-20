import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private api:string  =  environment.api_server + '/auth';

  constructor(private http : HttpClient) { }

  private auth(authType:AuthType, authData:AuthDTO){
      return this.http.post(`${this.api}`,authData);
  }

  login(authData:AuthDTO){
      return this.auth('login',authData);
  }

  register(authData:AuthDTO){
    return this.auth('register',authData);
  }

  whoami(){
    return this.http.get(`${this.api}/whoami`,{
      headers:{authorization: `Bearer ${this.token}`}
    });
  }

  get token(){
    return localStorage.getItem('idea_token');
  }

  set token(token: string){
    if(token){
        localStorage.setItem('idea_token', token);
    }else{
      localStorage.clear();
    }
    
    
  }

}
