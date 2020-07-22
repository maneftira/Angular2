import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { error } from 'protractor';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcongresspresident',
  templateUrl: './addcongresspresident.component.html',
  styleUrls: ['./addcongresspresident.component.css']
})
export class AddcongresspresidentComponent implements OnInit {
  Form :FormGroup;
  id :number;
  event:Event;

  constructor(private router: Router,private fb: FormBuilder,private adminService:AdminService,private userService:UserService) { 
    let formControls = {

      text: new FormControl('', [
        Validators.required,
        
      ]),}
      this.Form = fb.group(formControls);

  }
  get text() { return this.Form.get('text'); }


  ngOnInit(): void {
    this.userService.getUpcomingevents().subscribe(
      (result)=>{ var e = Object.assign(new Event(), result)
        this.id=e.id;
        this.event=e;},
      (error)=>{console.log(error);

      })
  }
  
  save(){
    let data=this.Form.value;
    this.event.word_Congress_president=data.text;
    console.log(this.event);
    this.adminService.addCongresspresident(this.id,this.event).subscribe(
      (result)=>{console.log(result)
        this.router.navigate([""])
        },
      (error)=>{console.log(error);

      });
  
  }
}
