import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {ResetPasswordComponent} from "../reset-password/reset-password.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'reset-password', component: ResetPasswordComponent},])
  ]
})
export class AuthenticationModule {
}
