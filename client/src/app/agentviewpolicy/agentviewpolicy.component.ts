import { Component, OnInit } from '@angular/core';
import { AgentviewpolicyService } from './agentviewpolicy.service';

@Component({
  selector: 'app-agentviewpolicy',
  templateUrl: './agentviewpolicy.component.html',
  styleUrls: ['./agentviewpolicy.component.css']
})
export class AgentviewpolicyComponent implements OnInit {

  showTable: boolean = false;
  policyid: any;
  vehicleid: any;
  viewcust: any;
  viewpol: any;
  viewveh: any;
  custid:any;
  constructor(private agentviewpolicyService: AgentviewpolicyService ) {}

  submit():void{

    this.agentviewpolicyService.getpolicy(parseInt(this.policyid)).subscribe((data) => {
      this.viewpol = data;
      console.log(data);

    })
    this.agentviewpolicyService.getcust(parseInt(this.custid)).subscribe((data) => {
      this.viewcust = data;
      console.log(data);

    })
    this.agentviewpolicyService.getvehicle(parseInt(this.vehicleid)).subscribe((data) => {
      this.viewveh = data;
      console.log(data);

    })
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }
  update(){
    this.agentviewpolicyService
  }
  ngOnInit(): void {
  }

}
