import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserSignup } from '../interfaces/authentication';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide: boolean = true;

  constructor(private authService : AuthenticationService,private router: Router,private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  onRegister(result: any){
    const inputName = result.name
    const inputSurname = result.surname
    const inputEmail = result.email
    const inputRole = result.role
    
    if (inputName != null && inputSurname != null && inputEmail != null && inputRole != null) {
      // make a request to the api
      let userDetails = new Object as UserSignup;
      userDetails = {
        name: inputName,
        surname: inputSurname,
        email: inputEmail,
        role: inputRole,
      };

      //switch jason object to application/x-www-form-urlencoded

      this.authService.UserRegister(userDetails).subscribe(data => {
        this.snackBar.open("Registered", "okay");
        // const expireTime = moment().
        this.router.navigate(["/login"]);
      });

      

      

    }
  }

}
