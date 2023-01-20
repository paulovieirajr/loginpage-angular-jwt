import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';


@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
