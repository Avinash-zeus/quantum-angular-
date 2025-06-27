import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm implements OnInit {
  loginForm: FormGroup;
  states: string[] = [];
  districts: string[] = [];
  stateDistrictData: Record<string, string[]> = {};
  showPassword = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      loginType: ['District', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }
  ngOnInit(): void {
    this.http.get<Record<string, string[]>>('assets/data/state-district-names.json')
      .pipe(
        catchError(error => {
          console.error('Failed to load state data:', error);
          return of({});
        })
      )
      .subscribe(data => {
        this.stateDistrictData = data;
        this.states = Object.keys(data);
      });
  }

  onStateChange(): void {
    const selectedState = this.loginForm.get('state')?.value;
    this.districts = this.stateDistrictData[selectedState] || [];

    // Reset district selection
    this.loginForm.get('district')?.setValue('');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Login Form Data:', this.loginForm.value);
    this.router.navigate(['dashboard']);
  }
}