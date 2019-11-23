import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap  } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { errorReducer,ErrorState } from '@app/store/reducers/errors.reducer';
import { AuthState, authReducer } from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
//import { RouterStateUrl } from './reducers/router.reducer';

export interface AppState{
  error: ErrorState;
  auth: AuthState;
//  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer
}

export const effects = [
    AuthEffects
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }
