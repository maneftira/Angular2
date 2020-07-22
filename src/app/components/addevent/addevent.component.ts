import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  public userfile :any =File;
   test=true;
   committesmb: any[] = [{
    nom: ''
  }];
  organizationtable: any[] = [{
    nom: ''
  }];
  showMsg: boolean;


  

  constructor(private router: Router,private http:HttpClient,private fb: FormBuilder,private adminservice :AdminService) { 
    let formControls = {

      Title: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$')
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
        
      ]),
      date2: new FormControl('', [
        Validators.required,
      
        
      ]),
      Word_At_president: new FormControl('', [
        
      ]),
      Word_Congress_president: new FormControl('', [
        
      ]),
    
    }
    this.eventForm = fb.group(formControls);
    
    
  
  
  }
  get Title() { return this.eventForm.get('Title'); }
  get  Word_Congress_president() { return this.eventForm.get('Word_Congress_president'); }
  get date() { return this.eventForm.get('date'); }
  get date2() { return this.eventForm.get('date2'); }
  get description() { return this.eventForm.get('description'); }
  get Word_At_president() { return this.eventForm.get('Word_At_president'); }
  ngOnInit(): void {
    
      this.eventForm.addControl("c1",new FormControl('', [
        Validators.required,
      ]),);
   
      this.eventForm.addControl("o1",new FormControl('', [
        Validators.required,
      ]),);
    
  }
  
  addcongress() {
    this.committesmb.push({
      nom: '',
      
    });
    this.eventForm.addControl("c"+(this.committesmb.length).toString(),new FormControl('', [
      Validators.required,
    ]),);
    console.log(this.committesmb);
  }
  addorganization() {
    this.organizationtable.push({
      nom: '',
      
    });
    this.eventForm.addControl("o"+(this.organizationtable.length).toString(),new FormControl('', [
      Validators.required,
    ]),);
    console.log(this.committesmb);
  }
  removecongress(i: number) {
    this.committesmb.splice(i, 1);
    console.log("c"+(i+1))
    this.eventForm.removeControl("c"+(i+1))

  }
  removeorganization(i: number) {
    this.organizationtable.splice(i, 1);
    console.log("O"+(i+1))
    this.eventForm.removeControl("o"+(i+1))
  }
  
  

  onFileSelected1(event){
    const selectedFile=event.target.files[0];
    this.userfile=selectedFile;
    this.test=false;
   
    
  }
  
  
  AddEvent(){
    let data=this.eventForm.value;
    var formData =new FormData()
    let data2={title:data.Title,date:data.date,datefin:data.date2,
      description:data.description,
      word_At_president:data.Word_At_president,
      word_Congress_president:data.Word_Congress_president,
      org:this.organizationtable,congress:this.committesmb
    }
    console.log(data2)
    formData.append("data",JSON.stringify(data2))
    formData.append("file",this.userfile);
    this.adminservice.addevent(formData).subscribe(
      (result)=>{
        console.log(result),
        this.router.navigate([""])
        
      },
      (error)=>{
        console.log(error);
      }
      )
  }
  

}
