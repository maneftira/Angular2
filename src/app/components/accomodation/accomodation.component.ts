import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';
import { error } from 'protractor';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
  admin=false;
  e : Event;
  test=false;
  tab :any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event, result)
        console.log(e);
        this.test=true;
        this.userService.getHotels(e.id).subscribe(
          (result)=>{ this.tab=result;
            console.log(result)},
          (error)=>console.log(error)

        )
       
        
      }
      ,(error)=>{
        console.log(error);
      })
  }

    
  }

