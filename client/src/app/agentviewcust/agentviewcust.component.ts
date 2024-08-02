import { Component, OnInit } from '@angular/core';
import { AgentviewcustService } from './agentviewcust.service';
import { ICust } from './cust';
@Component({
  selector: 'app-agentviewcust',
  templateUrl: './agentviewcust.component.html',
  styleUrls: ['./agentviewcust.component.css']
})
export class AgentviewcustComponent implements OnInit {



  showTable: boolean = false;
  aid: any;
  viewcust: any;
  


  constructor(private agentviewcustService: AgentviewcustService ) {}

  submit():void{

    this.agentviewcustService.getcust().subscribe (data =>{
    this.viewcust = data as ICust[];

    });

    }

  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }
  ngOnInit(): void {
    this.agentviewcustService.getcust().subscribe((data => this.viewcust = data ));
  }
  // filter() {
  //   this.filteredUsers = [...this.viewcust.filter(data => user.name.includes(this.filterBy))];
  // }

}


