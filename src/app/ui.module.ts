import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar'
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const UIM = [
  CardModule,
  InputTextModule,
  ButtonModule,
  ToastModule,
  MenubarModule,
  ProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UIM
  ],
  exports: [UIM],
  providers:[MessageService]
})
export class UIModule { }
