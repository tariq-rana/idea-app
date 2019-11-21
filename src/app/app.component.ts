import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/app-store.module';
//import { AddError } from './store/actions/errors.action';
import { LoginUser } from './store/actions/auth.action';
import { AuthDTO } from './models/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ideas-app';

  constructor(private store: Store<AppState>){}

  ngOnInit(){
      this.store.dispatch(new LoginUser(<AuthDTO>{username:'Cesar9',password:'password'}));    
      //this.store.dispatch(new AddError({error:'message'}));
  }
}
