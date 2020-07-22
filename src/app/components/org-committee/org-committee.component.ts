import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';


@Component({
  selector: 'app-org-committee',
  templateUrl: './org-committee.component.html',
  styleUrls: ['./org-committee.component.css']
})
export class OrgCommitteeComponent implements OnInit {
e : Event;
  tab =[];
  test=false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        console.log(e);
        this.test=true;
        this.tab=e.org;
       
        
      }
      ,(error)=>{
        console.log(error);
      }

      

    );
  }
}