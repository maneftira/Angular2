import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './components/addevent/addevent.component';
import { CongressCommitteeComponent } from './components/congress-committee/congress-committee.component';
import { OrgCommitteeComponent } from './components/org-committee/org-committee.component';
import { ATMFpresidentComponent } from './components/atmfpresident/atmfpresident.component';
import { WordCongresspresidentComponent } from './components/word-congresspresident/word-congresspresident.component';
import { ScientificProgrammeComponent } from './components/scientific-programme/scientific-programme.component';
import { AbstractComponent } from './components/abstract/abstract.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { EventSponsorsComponent } from './components/event-sponsors/event-sponsors.component';
import { ExhibitorComponent } from './components/exhibitor/exhibitor.component';
import { AreaPlanComponent } from './components/area-plan/area-plan.component';
import { AboutComponent } from './components/about/about.component';
import { DescriptionComponent } from './components/description/description.component';
import { PassedEventComponent } from './components/passed-event/passed-event.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { EthicComponent } from './components/ethic/ethic.component';
import { StatusComponent } from './components/status/status.component';
import { ElectionComponent } from './components/election/election.component';
import { MissionsComponent } from './components/missions/missions.component';
import { AddatmfpresidentComponent } from './components/addatmfpresident/addatmfpresident.component';
import { AddcongresspresidentComponent } from './components/addcongresspresident/addcongresspresident.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { HomeComponent } from './components/home/home.component';





const routes: Routes = [
  {
    path: 'AddEvent',
    component: AddEventComponent
  },
  {
    path: 'ATMF_president',
    component: AddatmfpresidentComponent
  },
  {
    path: 'Congres_president',
    component: AddcongresspresidentComponent
  },
  {
    path: 'ethic',
    component: EthicComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'election',
    component: ElectionComponent
  },
  {
    path: 'mission',
    component: MissionsComponent
  },
  {
    path: 'Accomodation',
    component: AccomodationComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'articles',
    children: [
      {

        path: '',
        component: ArticleListComponent,

      },
      {

        path: 'add',
        component: CreateArticleComponent,

      },]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'AddHotel',
    component: AddhotelComponent
  },
  {
    path: 'PassedEvents',
    component: PassedEventComponent
  },
  {
    path: 'AreaPlan',
    component: AreaPlanComponent
  },
  {
    path: 'Exhibitor',
    component: ExhibitorComponent
  },
  {
    path: 'SponsorSubmission',
    component: SponsorComponent
  },
  {
    path: 'General',
    component: DescriptionComponent
  },


  {
    path: 'Word of the ATMF president',
    component: ATMFpresidentComponent
  },
  {
    path: 'Word of the Congress president',
    component: WordCongresspresidentComponent
  },
  {
    path: 'ScCommittees',
    component: CongressCommitteeComponent
  },
  {
    path: 'abstract',
    component: AbstractComponent
  },
  {
    path: 'Scientific_programme/day1',
    component: ScientificProgrammeComponent
  },
  {
    path: 'orgCommittees',
    component: OrgCommitteeComponent
  },
  {
    path: 'Sponsors',
    component: EventSponsorsComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
