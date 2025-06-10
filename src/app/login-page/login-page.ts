import { Component } from '@angular/core';
import { LoginHeader } from './login-header/login-header';
import { LoginForm } from './login-form/login-form';
import { LoginFooter } from './login-footer/login-footer';

@Component({
  selector: 'app-login-page',
  imports: [LoginHeader, LoginForm, LoginFooter],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

}
