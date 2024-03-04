import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  proceedRegister() {
    const user = {
      name: this.registerForm.controls.name.value as string,
      userName: this.registerForm.controls.email.value as string,
      email: this.registerForm.controls.email.value as string,
      password: this.registerForm.controls.password.value?.toString(),
      permissionType: this.registerForm.controls.userType.value?.toString(),
    };
    this.userService.registerUser(user).subscribe({
      next: (res:any) => {
        this.snackBar.open('Logged in Successfully', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate([`/login`]);
      },
      error: (error:any) => {
        if (error.error.message === 'Invalid email or password') {
          // Show a snackBar for invalid credentials
          this.snackBar.open('Invalid email or password. Please try again.', 'Dismiss', {
            duration: 3000,
          });
        } else if (error.error.message.startsWith('E11000 duplicate key error')) {
          // Show a snackBar for duplicate key error
          this.snackBar.open('User already logged in', 'Dismiss', {
            duration: 3000,
          });
        } else {
          // Show a generic snackBar for other errors
          this.snackBar.open('An error occurred. Please try again later.', 'Dismiss', {
            duration: 3000,
          });
        }

      },
    });
  }
}
