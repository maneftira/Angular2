import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article : Article;
  articles = [];
  filtredArticle : Article;
  title : string;
  isAdmin = true;
  constructor(private fb: FormBuilder, private _adminService:AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this._adminService.getAllArticles().subscribe(
      (articlesFromDb)=>{
        this.articles = articlesFromDb;
      },
      (error)=>{
        console.log(error);
      }
  )}

  deleteArticle(id:number, index:number){
    this._adminService.deleteArticle(id).subscribe(
      (result)=>{
        
        console.log(result)
  
        
      },
      (error)=>{
        console.log(error);
      })
      this.articles.splice(index,1);

  }
  Search(){
    if(this.title != ""){
    this.articles = this.articles.filter(res=>{ 
    return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
    } else if(this.title == ""){
    this.ngOnInit();
    }
  }
}
