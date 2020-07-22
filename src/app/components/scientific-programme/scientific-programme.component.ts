import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';


@Component({
  selector: 'app-scientific-programme',
  templateUrl: './scientific-programme.component.html',
  styleUrls: ['./scientific-programme.component.css']
})
export class ScientificProgrammeComponent implements OnInit {
    e:Event;
    Url : SafeUrl;
    test=false;
    
  constructor(private userService: UserService,private sanitizer:DomSanitizer) { }
  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        console.log(e.id);
        this.test=true;
         this.userService.downloadPDF(e.id).subscribe(
          (res) => {
            var fileURL = URL.createObjectURL(res);
            this.Url= this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
          

        
          }
      );
      }
      ,(error)=>{
        console.log(error);

      })
  }

  

}
