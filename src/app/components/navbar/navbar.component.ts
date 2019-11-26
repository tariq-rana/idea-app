import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/components/common/menuitem';

import { AppState } from '@app/store';
import { AuthService } from '@app/services/auth.service';
import { SetCurrentUser } from '@app/store/actions/auth.action';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  items: MenuItem[] = [
      {
        label: 'Home' ,
        routerLink : ['/'],
        icon : 'fa fa-home'
      },
      {
        label: 'Users' ,
        routerLink : ['/users'],
        icon : 'fa fa-user-o '
      },
      {
        label: 'Ideas' ,
        routerLink : ['/ideas'],
        icon : 'fa fa-lightbulb-o'
      }
    ];

  constructor(
      private authService:AuthService,
      private router: Router,
      private store: Store<AppState>
    ) { }

  ngOnInit() {
    
  }
  onClick() {
    if (this.authService.token) {
      this.authService.token = null;
      this.store.dispatch(new SetCurrentUser(null));
    }
    this.router.navigate(['/auth']);
  }

}
