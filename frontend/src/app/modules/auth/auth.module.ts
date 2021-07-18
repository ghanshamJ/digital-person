import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login.component';

import { FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { AuthService } from 'src/app/core/services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    AuthRoutingModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}

