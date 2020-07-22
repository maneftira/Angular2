import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-word-congresspresident',
  templateUrl: './word-congresspresident.component.html',
  styleUrls: ['./word-congresspresident.component.css']
})
export class WordCongresspresidentComponent implements OnInit {
  s: String;
  e:Event;
  test=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        console.log(e);
        this.test=true;
        this.s=e.word_Congress_president;
        
    
      }
      ,(error)=>{
        console.log(error);})
  }

}

