import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 ContactForm :FormGroup

  showMsg: boolean = false;

  constructor(private router: Router,private fb: FormBuilder,private userService:UserService,private adminservice:AdminService) {
    let formControls = {

      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      subject: new FormControl('', [
        Validators.required,
      ]),
    
    
    }
      this.ContactForm = fb.group(formControls);
   }
   get email() { return this.ContactForm.get('email'); }
   get subject() { return this.ContactForm.get('subject'); }
   get description() { return this.ContactForm.get('description'); }
  ngOnInit(): void {
    
  }
  save(){
    let form=this.ContactForm.value;
    let data ={email:form.email,subject :form.subject,description :form.description}
    
    console.log(data);
                
    this.userService.Contact(data).subscribe(
    (result)=> {console.log(result),
      this.showMsg= true;
      this.ContactForm.reset();
      window.scroll(0,0);},
      
    (error)=>{console.log(error)}
 
    )
    
   }
  


  }

