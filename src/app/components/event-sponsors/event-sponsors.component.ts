import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { error } from 'protractor';


@Component({
  selector: 'app-event-sponsors',
  templateUrl: './event-sponsors.component.html',
  styleUrls: ['./event-sponsors.component.css']
})
export class EventSponsorsComponent implements OnInit {
  sponsors: any;
  Tab = [];
  Url: SafeUrl;
  constructor(private adminService: AdminService, private userService: UserService, private sanitizer: DomSanitizer) {


  }

  ngOnInit(): void {
    this.adminService.GetSponsors().subscribe(
      (result) => {
        this.sponsors = result;
        console.log(this.sponsors)
        this.sponsors.forEach(element => {

          this.userService.downloadLogo(element.id).subscribe(
            (res) => {
              var fileURL = URL.createObjectURL(res);
              this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
              this.Tab.push(this.Url);
              console.log(this.Tab);
            },
            (error) => {console.log(error);})





        })}
    ,(error)=>console.log(error))}
  
  
  
  
  
  
  
  }

        
    
    
  
