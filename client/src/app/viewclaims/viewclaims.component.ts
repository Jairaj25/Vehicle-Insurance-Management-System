import { Component, OnInit } from '@angular/core';
import { ViewclaimsService } from './viewclaims.service';
@Component({
  selector: 'app-viewclaims',
  templateUrl: './viewclaims.component.html',
  styleUrls: ['./viewclaims.component.css']
})
export class ViewclaimsComponent implements OnInit {

  showTable: boolean = false;
  viewclaim: any;
  claimid:any;
  constructor(private viewclaimsService: ViewclaimsService ) {}

  submit():void{

    this.viewclaimsService.getclaim(parseInt(this.claimid)).subscribe((data) => {
      this.viewclaim = data;
      console.log(data);

    })
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }

  ngOnInit(): void {
  }

}
