import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../interfaces/authentication';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup 
  hide = true;
  constructor(formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitForm():void {
    //check if the inputs have something
    const inputUsername = this.loginForm.controls["username"].value;
    const inputPassword = this.loginForm.controls["password"].value;
    if (inputUsername != null && inputPassword != null) {
      // make a request to the api
      let userDetails = new Object as UserLogin;
      userDetails = {
        username: inputUsername, 
        password: inputPassword,
      };

      //switch jason object to application/x-www-form-urlencoded

      this.authService.UserLogin(userDetails).subscribe(data => {
        localStorage.setItem("id_token", data.access_token);
        // const expireTime = moment().
        this.router.navigate(["/home"]);
      });

      

      

    }
  }

}
