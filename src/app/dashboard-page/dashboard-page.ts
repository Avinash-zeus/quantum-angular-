import { Component } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { LoginFooter } from '../login-page/login-footer/login-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardHeader, RouterOutlet, LoginFooter],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css'
})
export class DashboardPage {

}