import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  s: String="";
  d: Date=null;
  d2: Date=null;
  t:String="";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        console.log(e);
        this.s=e.description;
        this.d=e.date;
        this.d2=e.datefin;
        this.t=e.title;
        
    
      }
      ,(error)=>{
        console.log(error);})
  
  }

}
