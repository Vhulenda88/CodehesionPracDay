import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup 
  hide = true;
  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submit():void {
    //check if the inputs have something
    const username = this.loginForm.controls["username"].value;
    const password = this.loginForm.controls["password"].value;
    if (username != null && password != null) {
      // make a request to the api
      
    }
  }

}
