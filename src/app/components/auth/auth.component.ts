import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { AuthType } from '@app/models/auth';
import { validateWhitespace } from '@app/utilities/validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  loading = false;
  subscription$;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  auth(authType: AuthType = 'login') {
    const action = {
      login: LoginUser,
      register: RegisterUser
    };
    const val = this.authForm.getRawValue();
    this.store.dispatch(new action[authType](val));
    this.subscription$ = this.store
      .select(state => state.auth)
      .subscribe(val => {
        this.loading = val.loading;
        if (val.user && val.loaded) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    this.subscription$ && this.subscription$.unsubscribe();
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { Store } from '@ngrx/store';


// import { AppState } from '@app/store/app-store.module';
// import { validateWhitespace } from '@app/utilities/validators';
// import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
// import { AuthDTO } from '@app/models/auth';


// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.scss']
// })
// export class AuthComponent implements OnInit {
//   authForm: FormGroup;

//   constructor(private fb: FormBuilder, private store:Store<AppState>) { }

//   ngOnInit() {
//     this.authForm = this.fb.group({
//         username : this.fb.control('',[Validators.required, validateWhitespace]),
//         password:  this.fb.control('',[Validators.required, validateWhitespace])
//     });
//   }

//   login(){
//       const val = this.authForm.getRawValue() as AuthDTO;
//       this.store.dispatch(new LoginUser(val));
//   }

//   register(){
//     const val = this.authForm.getRawValue() as AuthDTO;
//     this.store.dispatch(new RegisterUser(val));
//   }

// }
