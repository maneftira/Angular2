import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';




@Component({
  selector: 'app-congress-committee',
  templateUrl: './congress-committee.component.html',
  styleUrls: ['./congress-committee.component.css']
})
export class CongressCommitteeComponent implements OnInit {
  e : Event;
  tab =[];
  test=false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        console.log(e);
        this.test=true;
        this.tab=e.congress;
        
      }
      ,(error)=>{
        console.log(error);
      }

      

    );
  }

  

}
