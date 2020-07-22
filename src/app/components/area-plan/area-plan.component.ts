import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-area-plan',
  templateUrl: './area-plan.component.html',
  styleUrls: ['./area-plan.component.css']
})
export class AreaPlanComponent implements OnInit {
  Url: SafeUrl;
  id:number;
  area=false;
  admin=true;
  selectedFile: File;
  constructor(private sanitizer: DomSanitizer,private userService: UserService,private adminServise:AdminService) { }

  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event(), result)
        this.id=e.id;
        
        this.userService.downloadAreaPlan(this.id).subscribe(
          (res) => {
            var fileURL = URL.createObjectURL(res);
            this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
          
            
          },
          (error) => {console.log(error);})
        
      }
      ,(error)=>{
        console.log(error);
      })
      
  }
  onFileSelected(event){
    this.selectedFile=event.target.files[0];

 }
  upload(id:number){
    var formData=new FormData();
    formData.append("file",this.selectedFile);
    this.adminServise.addAreaPlan(id,formData).subscribe(
      (result)=>{console.log(result);
      this.ngOnInit();
      
      },
      (error)=>console.log(error)
      )}

}
