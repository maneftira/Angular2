import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './components/addevent/addevent.component';
import {HttpClientModule} from '@angular/common/http';
import { CongressCommitteeComponent } from './components/congress-committee/congress-committee.component';
import { OrgCommitteeComponent } from './components/org-committee/org-committee.component';
import { CommonModule } from "@angular/common";
import { ATMFpresidentComponent } from './components/atmfpresident/atmfpresident.component';
import { WordCongresspresidentComponent } from './components/word-congresspresident/word-congresspresident.component';
import { ScientificProgrammeComponent } from './components/scientific-programme/scientific-programme.component';
import { AbstractComponent } from './components/abstract/abstract.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { EventSponsorsComponent } from './components/event-sponsors/event-sponsors.component';
import { ExhibitorComponent } from './components/exhibitor/exhibitor.component';
import { AreaPlanComponent } from './components/area-plan/area-plan.component';
import { AboutComponent } from './components/about/about.component';
import {MatTableModule} from '@angular/material/table';
import { DescriptionComponent } from './components/description/description.component';
import { PassedEventComponent } from './components/passed-event/passed-event.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { HeaderComponent } from './components/header/header.component';
import { MissionsComponent } from './components/missions/missions.component';
import { ElectionComponent } from './components/election/election.component';
import { StatusComponent } from './components/status/status.component';
import { EthicComponent } from './components/ethic/ethic.component';
import { AddatmfpresidentComponent } from './components/addatmfpresident/addatmfpresident.component';
import { AddcongresspresidentComponent } from './components/addcongresspresident/addcongresspresident.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';



@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    CongressCommitteeComponent,
    OrgCommitteeComponent,
    ATMFpresidentComponent,
    WordCongresspresidentComponent,
    ScientificProgrammeComponent,
    AbstractComponent,
    SponsorComponent,
    EventSponsorsComponent,
    ExhibitorComponent,
    AreaPlanComponent,
    AboutComponent,
    DescriptionComponent,
    PassedEventComponent,
    AccomodationComponent,
    HeaderComponent,
    MissionsComponent,
    ElectionComponent,
    StatusComponent,
    EthicComponent,
    AddatmfpresidentComponent,
    AddcongresspresidentComponent,
    AddhotelComponent,
    HomeComponent,
    ArticleListComponent,
    CreateArticleComponent,
    
    
   
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
