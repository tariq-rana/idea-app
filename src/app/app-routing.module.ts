import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'users', loadChildren:'@app/features/user/user.module#UserModule'},
  {path:'ideas', loadChildren:'@app/features/idea/idea.module#IdeaModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
