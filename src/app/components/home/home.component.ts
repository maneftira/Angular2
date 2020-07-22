import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article : Article;
  resume: string;
  link: string;
  

  constructor(private _adminService:AdminService, private router: Router) { }


  ngOnInit(): void {
    this._adminService.getNewArticle().subscribe(
      (articleFromDb)=>{
        this.article = articleFromDb
      },
      (error)=>{
        console.log(error);
      }
  )}
}

