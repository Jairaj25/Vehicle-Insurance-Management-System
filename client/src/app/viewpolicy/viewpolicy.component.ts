import { Component, OnInit } from '@angular/core';
import { ViewpolicyService } from './viewpolicy.service';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {


  showTable: boolean = false;
  viewpolicy: any;
  policynum:string="0";
  constructor(private viewpolicyService: ViewpolicyService ) {}

  submit():void{

    this.viewpolicyService.getpolicy(parseInt(this.policynum)).subscribe((data) => {
      this.viewpolicy = data;
      console.log(data);

    })
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }

  ngOnInit(): void {}

}
