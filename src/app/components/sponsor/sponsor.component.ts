import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { from } from 'rxjs';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  SponsorForm:FormGroup;
  sponsors=[];
  admin=true;
  test=false;
  id: number;
  selectedFile: File;
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
    
    this.SponsorForm = fb.group(formControls);
  }
  get Company() { return this.SponsorForm.get('Company'); }
  get Email() { return this.SponsorForm.get('Email'); }
  get Website() { return this.SponsorForm.get('Website'); }
  get Fax() { return this.SponsorForm.get('Fax'); }
  get Telephone() { return this.SponsorForm.get('Telephone'); }
  get Country() { return this.SponsorForm.get('Country'); }
  get PostalCode() { return this.SponsorForm.get('PostalCode'); }
  get City() { return this.SponsorForm.get('City'); }
  get PhysicalAddress() { return this.SponsorForm.get('PhysicalAddress'); }
  get VATNr() { return this.SponsorForm.get('VATNr'); }
  
  ngOnInit(): void {
    this.getSponsors();
    this.userServise.getUpcomingevents().subscribe(
        (result)=>{ var e = Object.assign(new  Event(), result)
          console.log(e.id);
          this.id=e.id;
          this.test=true;
  
        }
        ,(error)=>{
          console.log(error);})
  }
  AddSponsor(){
    let form=this.SponsorForm.value;
    let data={company:form.Company,vatnr:form.VATNr,physicalAddress:form.PhysicalAddress,city:form.City,
      postalCode:form.PostalCode,country:form.Country,postalAddress:form.PostalAddress,contactName:form.ContactName,
      telephone:form.Telephone,fax:form.Fax,email:form.Email,website:form.Website}
      console.log(data);
    
      this.userServise.AddSponsor(data,this.id).subscribe(
        (result)=> {console.log(result);
          window.scroll(0,0);
          this.showMsg=true;
          this.SponsorForm.reset();
        

        },
        (error)=>console.log(error)
      )
    }
    onFileSelected(event){
       this.selectedFile=event.target.files[0];
   
    }
    upload(id:number){
      var formData=new FormData();
      formData.append("Logo",this.selectedFile);
      console.log(formData)
      this.adminServise.addLogo(id,formData).subscribe(
        (result)=>{console.log(result);
        this.ngOnInit()},
        (error)=>console.log(error)
        )


    }

      
  getSponsors(){
    this.adminServise.GetSponsors().subscribe(
      (result)=>{let a = Object.assign(this.sponsors, result)
        console.log(this.sponsors)
        
      },
      (error)=>{
        console.log(error);
      }


    )
  }  
  deletesponsor(id:number,index:number){
    this.adminServise.deleteSponsor(id).subscribe(
      (result)=>{
        
        console.log(result)
  
        
      },
      (error)=>{
        console.log(error);
      })
      this.sponsors.splice(index,1);
  }
  

  }


