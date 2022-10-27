import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path: '' , redirectTo: 'home', pathMatch: 'full'},
{path: 'home' , component: HomeComponent},
{path: 'resume' , component: ResumeComponent},
{path: 'about' , component: AboutComponent},
{path: 'projects' , component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
 