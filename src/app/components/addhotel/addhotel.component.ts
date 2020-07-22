import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { UserService } from 'src/app/services/user.service';
import { Hotel } from 'src/app/models/hotel';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  HotelForm: FormGroup;
  id :number;
  event:Event;
  h=new Hotel();

  constructor(private router: Router,private fb: FormBuilder,private userService: UserService,private adminService:AdminService) {
    let formControls = {

      name: new FormControl('', [
        Validators.required,
      ]),
      Link: new FormControl('', [
        Validators.required,
      ]),
      info: new FormControl('', [
        
      ]),
    }
    this.HotelForm = fb.group(formControls);
  }
  get name() { return this.HotelForm.get('name'); }
  get Link() { return this.HotelForm.get('Link'); }
  get info() { return this.HotelForm.get('info'); }
  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ let e = Object.assign(new Event, result)
        this.id=e.id;
        this.event=e;        
      }
      ,(error)=>{
        console.log(error);
      })
  }
  AddHotel(){
    let form=this.HotelForm.value;
    let data={name:form.name,link:form.Link,info:form.info};
    console.log(data)
    this.adminService.Addhotel(this.id,data).subscribe(
      (result)=>{console.log(result)
        this.router.navigate(["About"])
        },
      (error)=>{console.log(error);

      });
  
  }
    
  }
