import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { addcustreq } from './addcust.model';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  popup = false;
  showMyMessage = false;
  user:addcustreq=new addcustreq;

  constructor(private router: Router,private registerSRV:RegisterService) {}

  ngOnInit() {

  }

  pome() {

    console.log(this.user);

    this.registerSRV.addcust(this.user).subscribe((d:any)=>console.log(d))

  }

}
