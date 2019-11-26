import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { MenuItem } from 'primeng/components/common/menuitem';

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

  constructor(private authService:AuthService) { }

  ngOnInit() {
    
  }

}
