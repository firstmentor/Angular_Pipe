import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstpart';


  myname:string='how to Developer'
  mydate= new Date(1993,10,15);  //date 0,jan,1,feb
  mynumber:number=67.44;  //decimal number
  mycurrency:number=6744;  //currency number


  mydata:any[]=[
    {id:1,name:'vikas',city:'gwa'},
    {id:2,name:'viki',city:'eta'},
    {id:3,name:'ram',city:'bhi'},
    {id:4,name:'vika',city:'hg'},
  ];
}
