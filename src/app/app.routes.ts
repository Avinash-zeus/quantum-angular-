import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { DashboardContent } from './dashboard-page/dashboard-content/dashboard-content';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', title: 'Quantum Login', component: LoginPage },
    {
        path: 'dashboard', title: 'Quantum Dashboard', component: DashboardPage, children: [
            { path: '', component: DashboardContent },
            { path: 'content', component: DashboardContent },
            { path: 'users', component: DashboardContent },
            { path: 'reports', component: DashboardContent },
            { path: 'admin', component: DashboardContent },
        ]
    },
];
