import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CompetencesComponent } from './competences/competences.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [{path:'',component:AppComponent},{path:'competences',component:CompetencesComponent},{path:'projects',component:ProjectsComponent},{path:'cv',component:EducationComponent},{path:'about',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
