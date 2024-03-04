import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StateManageService } from 'src/app/services/state-manage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private userService: UserService,private snackBar: MatSnackBar,private stateManageService:StateManageService) {}

  proceedLogin() {
    const user  = {
      email: this.loginForm.controls.email.value as string,
      password: this.loginForm.controls.password.value?.toString()
    }
    this.userService.loginUser(user).subscribe({
      next : (res: any)=>{
        console.log(res)
        this.stateManageService.setLoggedUserData(res)
        this.snackBar.open('Logged in Successfully', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate([`/app/launchpad`]);
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
      }
    })
  }

  goToRegister() {
    this.router.navigate([`/register`]);
  }
}
