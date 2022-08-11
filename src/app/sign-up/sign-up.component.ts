import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
        email: new FormControl("",[Validators.required]),
        
      })
  }

  ngOnInit(): void {
  }

}
