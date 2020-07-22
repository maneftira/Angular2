import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  addForm: FormGroup;
  showMsg: boolean;

  constructor(private fb: FormBuilder, private _adminService: AdminService, private router: Router) {
    let formControls = {
       title: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      link: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
      ]),
      type: new FormControl('', [
        Validators.required
      ])
      
    }

    this.addForm = fb.group(formControls);
  }

  get title() { return this.addForm.get('title'); }
  get date() { return this.addForm.get('date'); }
  get description() { return this.addForm.get('description'); }
  get link() { return this.addForm.get('link'); }
  get type() { return this.addForm.get('type');}


  ngOnInit(): void {
  }

  addArticle(){
    let form=this.addForm.value;
    let data={title:form.title,date:form.date,description:form.description,link:form.link,
      type:form.type}
      console.log(data);
    
      this._adminService.addArticle(data).subscribe(
        (result)=> {console.log(result);
          window.scroll(0,0);
          this.showMsg=true;
        this.addForm.reset();
        

        },
        (error)=>console.log(error)
      )
    }
}


  

