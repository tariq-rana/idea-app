import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ApiService } from '@app/services/api.service';
import { AuthService } from '@app/services/auth.service';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthComponent } from './components/auth/auth.component';
import { UIModule } from './ui.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule
    
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
