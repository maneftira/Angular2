import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Abstract } from 'src/app/models/abstract';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  
  abstractForm :FormGroup
  admin=false;
  showMsg:boolean;
  id: number;
  abstracts: Abstract[] = [];
  displayedColumns: string[] = ['Title', 'Authors names', 'Presenter name','Presenter email','Presenter WhatsApp','Text','Delete'];
  data: any;
  constructor(private userServise:UserService,private http:HttpClient,private fb: FormBuilder,private userService:UserService,private adminService:AdminService) { 
    let formControls = {

      Title: new FormControl('', [
        Validators.required,
      ]),
      MyText: new FormControl('', [
        Validators.required,
      ]),
      WhatsApp: new FormControl('', [
        
      ]),
      PresenterEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      Presenter: new FormControl('', [
        Validators.required,
      ]),
      Authors: new FormControl('', [
        Validators.required,
      ]),
    }
    this.abstractForm = fb.group(formControls);
  
  }
  get Title() { return this.abstractForm.get('Title'); }
  get Presenter() { return this.abstractForm.get('Presenter'); }
  get Authors() { return this.abstractForm.get('Authors'); }
  get PresenterEmail() { return this.abstractForm.get('PresenterEmail'); }
  get WhatsApp() { return this.abstractForm.get('WhatsApp'); }
  get MyText() { return this.abstractForm.get('MyText'); }

  ngOnInit(): void {
    this.getAbstract();
    this.userServise.getUpcomingevents().subscribe(
      (result)=>{ var e = Object.assign(new  Event(), result)
        console.log(e.id);
        this.id=e.id;

      }
      ,(error)=>{
        console.log(error);})
  }
  AddAbstract(){
    let form=this.abstractForm.value;
    let data={title:form.Title,auther:form.Authors,presenter:form.Presenter,pmail:form.PresenterEmail,whatsApp:form.WhatsApp,text:form.MyText}
    console.log(data)
    this.userService.addAbstract(data,this.id).subscribe(
      (result)=>{
        console.log(result);
        window.scroll(0,0);
        this.showMsg=true;
        this.abstractForm.reset();
      },
      (error)=>{
        console.log(error);
      })

  }
  getAbstract(){

    this.adminService.getAbstract().subscribe(
      (result)=>{let a = Object.assign(this.abstracts, result)
        this.data=new MatTableDataSource(this.abstracts)
        console.log(this.abstracts)
        
      },
      (error)=>{
        console.log(error);
      })

  }
  deleteAbstract(id:number,index:number){
    this.adminService.deleteAbstract(id).subscribe(
      (result)=>{
        
        console.log(result)
  
        
      },
      (error)=>{
        console.log(error);
      })
      
      this.data.data.splice(index, 1);
      this.data._updateChangeSubscription();
     
  }
}
