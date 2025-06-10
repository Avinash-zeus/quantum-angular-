import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginHeader } from './login-page/login-header/login-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'quantum';

}