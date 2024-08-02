import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { addpol } from './addpolicy.model';
import { addvehicle } from './addpolicy.model';
import { BuypolicyService } from './buypolicy.service';



@Component({
  selector: 'app-buypolicy',
  templateUrl: './buypolicy.component.html',
  styleUrls: ['./buypolicy.component.css']
})
export class BuypolicyComponent implements OnInit {

  popup = false;
  showMyMessage = false;
  user:addpol=new addpol;
  user1: addvehicle=new addvehicle;
  constructor(private router: Router,private registerSRV:BuypolicyService) {}

  ngOnInit() {

  }

  pome() {


    console.log(this.user);
    this.user.Policy_number=""+this.randomIntFromInterval(1000,9999);
    this.registerSRV.addpolicy(this.user).subscribe((d:any)=>console.log(d))
    this.registerSRV.addvehicle(this.user1).subscribe((d:any)=>console.log(d))

  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    // this.user.Policy_number = this.randomIntFromInterval(1000, 9999)
  }

}
