import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { addclaims } from './addclaim.model';
import { ClaimService } from './claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  popup = false;
  showMyMessage = false;
  user:addclaims=new addclaims;
  constructor(private router: Router,private registerSRV:ClaimService) {}

  ngOnInit() {

  }

  pome() {


    console.log(this.user);

    this.registerSRV.addclaimss(this.user).subscribe((d:any)=>console.log(d))

  }

}
