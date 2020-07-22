import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-passed-event',
  templateUrl: './passed-event.component.html',
  styleUrls: ['./passed-event.component.css']
})

export class PassedEventComponent implements OnInit {
  

  public Tab =[];
  

  constructor(private userService: UserService) { 
    
  }
  
  ngOnInit(): void {
    
    this.userService.getPassedevents().subscribe(
      (result) => {
        this.Tab= result;
      console.log(this.Tab)},
      (error)=>{console.log(error)}
    )
  }
  fonction(e:Event){
    this.userService.downloadPDF(e.id).subscribe(
      (res) => {
        var fileURL = URL.createObjectURL(res);
          window.open(fileURL);}
      ,(error)=>{console.log(error);})
    }  
  

}

