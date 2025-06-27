import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Announcement {
  status: 'read' | 'unread';
  author: string;
  message: string;
  course?: string;
  attachments?: number;
  date: string;
}

interface MyNotification {
  status: 'read' | 'unread';
  title: string;
  course?: string;
  class?: string;
  date?: string;
}

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss'
})
export class DashboardHeader implements OnInit {
  announcements: Announcement[] = [];
  notifications: MyNotification[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Announcement[]>('assets/data/announcements.json').subscribe(data => this.announcements = data);
    this.http.get<MyNotification[]>('assets/data/notifications.json').subscribe(data => this.notifications = data);
  }
}