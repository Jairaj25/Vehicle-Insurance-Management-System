import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      ID: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  get ID()
  {
    return this.myForm.get('ID');
  }
  get password()
  {
    return this.myForm.get('password');
  }

  onSubmit() {
    if(this.myForm.valid)
    {
      this.router.navigate(['/dashboard']);
    }
    else
    {
      console.log("Form is not valid")
    }
  }

}
