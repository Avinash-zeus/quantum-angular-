import { Component } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { LoginFooter } from '../login-page/login-footer/login-footer';
import { DashboardContent } from './dashboard-content/dashboard-content';

@Component({
  selector: 'app-dashboard-page',
  imports: [DashboardHeader, DashboardContent, LoginFooter],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css'
})
export class DashboardPage {

}