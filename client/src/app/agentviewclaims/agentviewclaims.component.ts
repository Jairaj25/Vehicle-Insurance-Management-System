import { Component, OnInit } from '@angular/core';
import { AgentviewclaimsService } from './agentviewclaims.service';
import { Claimsmodel } from './Claimsmodel.model';
@Component({
  selector: 'app-agentviewclaims',
  templateUrl: './agentviewclaims.component.html',
  styleUrls: ['./agentviewclaims.component.css']
})
export class AgentviewclaimsComponent implements OnInit {

  popup = false;
  showMyMessage = false;
  showTable: boolean = false;
  viewclaim: any;
  claimid:any;
  claimView:Claimsmodel=new Claimsmodel();
  constructor(private agentviewclaimsService: AgentviewclaimsService ) {}

  submit():void{

    this.agentviewclaimsService.getclaim(parseInt(this.claimid)).subscribe((data) => {
      this.viewclaim = data;
      this.claimView = data as Claimsmodel;
      // console.log(data);

    })
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }
  update(){
    // console.log(this.claimView);

    this.agentviewclaimsService.putClaim(this.claimView).subscribe(data=>{

    });
  }

  ngOnInit(): void {
  }

}
