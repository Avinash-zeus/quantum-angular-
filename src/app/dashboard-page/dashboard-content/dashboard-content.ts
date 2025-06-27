import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Course {
  expired?: boolean;
  image: string;
  title: string;
  favourite?: boolean;
  subject?: string;
  grade?: string;
  gradePlus?: string;
  units?: number;
  lessons?: number;
  topics?: number;
  class?: (string | null)[];
  students?: number;
  date?: string;
  canPreview?: boolean;
  canManage?: boolean;
  canGrade?: boolean;
  canReport?: boolean;
}

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.scss'
})
export class DashboardContent implements OnInit {
  courses: Course[] = [];
  activeStat = 'courses';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Course[]>('assets/data/courses.json').subscribe(data => this.courses = data);
  }

  setActiveStat(stat: string): void {
    this.activeStat = stat;
  }

  isCourseClassEmpty(course: Course): boolean {
    return !course.class || course.class.length === 0 || course.class[0] === null || course.class[0] === '';
  }

  getOpacity(flag?: boolean): number {
    return flag === false ? 0.5 : 1;
  }

  getCursor(flag?: boolean): string {
    return flag === false ? 'not-allowed' : 'pointer';
  }
}