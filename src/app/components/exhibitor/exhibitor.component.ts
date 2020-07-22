import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';


@Component({
  selector: 'app-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.css']
})
export class ExhibitorComponent implements OnInit {
  ExhibitorForm:FormGroup;
  Exhibitors=[];
  admin=false;
  test=false;
  id: number;
  showMsg: boolean;
 

  constructor(private router:Router,private fb: FormBuilder,private userServise:UserService,private adminServise:AdminService) { 
    let formControls = {
      Company: new FormControl('', [
        Validators.required,
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      Website: new FormControl('', [
      
      ]),
      VATNr: new FormControl('', [
        
      
      ]),
      PhysicalAddress: new FormControl('', [
      
      ]),
      City: new FormControl('', [
        Validators.pattern(new RegExp("[a-zA-Z ]"))
      
      ]),
      PostalCode: new FormControl('', [
        Validators.pattern(new RegExp("[0-9]"))
      
      ]),
      Country: new FormControl('', [
        Validators.pattern(new RegExp("[a-zA-Z ]"))
      
      ]),
      PostalAddress: new FormControl('', [
      
      ]),
      ContactName: new FormControl('', [
      
      ]),
      Telephone: new FormControl('', [
        Validators.pattern(new RegExp("[0-9 ]"))
      
      ]),
      Fax: new FormControl('', [
        Validators.pattern(new RegExp("[0-9 ]"))
      
      ]),
    }
    
    this.ExhibitorForm = fb.group(formControls);
  }
  get Company() { return this.ExhibitorForm.get('Company'); }
  get Email() { return this.ExhibitorForm.get('Email'); }
  get Website() { return this.ExhibitorForm.get('Website'); }
  get Fax() { return this.ExhibitorForm.get('Fax'); }
  get Telephone() { return this.ExhibitorForm.get('Telephone'); }
  get Country() { return this.ExhibitorForm.get('Country'); }
  get PostalCode() { return this.ExhibitorForm.get('PostalCode'); }
  get City() { return this.ExhibitorForm.get('City'); }
  get PhysicalAddress() { return this.ExhibitorForm.get('PhysicalAddress'); }
  get VATNr() { return this.ExhibitorForm.get('VATNr'); }
  
  ngOnInit(): void {
    this.getExhibitor();
    this.userServise.getUpcomingevents().subscribe(
        (result)=>{ var e = Object.assign(new  Event(), result)
          console.log(e.id);
          this.id=e.id;
          this.test=true;
  
        }
        ,(error)=>{
          console.log(error);})
  }
  addExhibitor(){
    let form=this.ExhibitorForm.value;
    let data={company:form.Company,vatnr:form.VATNr,physicalAddress:form.PhysicalAddress,city:form.City,
      postalCode:form.PostalCode,country:form.Country,postalAddress:form.PostalAddress,contactName:form.ContactName,
      telephone:form.Telephone,fax:form.Fax,email:form.Email,website:form.Website}
      console.log(data);
    
      this.userServise.AddExhibitor(data,this.id).subscribe(
        (result)=> {console.log(result);
          window.scroll(0,0);
        this.showMsg=true;
        this.ExhibitorForm.reset();
        

        },
        (error)=>console.log(error)
      )
    }
    
    
   


      
  getExhibitor(){
    this.adminServise.GetExhibitors().subscribe(
      (result)=>{let a = Object.assign(this.Exhibitors, result)
        console.log(this.Exhibitors)
        
      },
      (error)=>{
        console.log(error);
      }


    )
  }  
  deleteExhibitor(id:number,index:number){
    this.adminServise.deleteExhibitor(id).subscribe(
      (result)=>{
        
        console.log(result)
  
        
      },
      (error)=>{
        console.log(error);
      })
      this.Exhibitors.splice(index,1);
  }
  

  }


