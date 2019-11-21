import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const UIM = [
  CardModule,
  InputTextModule,
  ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UIM
  ],
  exports: [UIM]
})
export class UIModule { }
