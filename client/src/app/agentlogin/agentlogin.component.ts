import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.component.html',
  styleUrls: ['./agentlogin.component.css']
})
export class AgentloginComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  get email()
  {
    return this.myForm.get('email');
  }
  get password()
  {
    return this.myForm.get('password');
  }

  onSubmit() {
    if(this.myForm.valid)
    {
      this.router.navigate(['/agentdashboard']);
    }
    else
    {
      console.log("Form is not valid")
    }
  }

}
