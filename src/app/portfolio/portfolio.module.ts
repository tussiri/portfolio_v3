import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguagesSkillsComponent } from './languages-skills/languages-skills.component';





@NgModule({
  declarations: [HomeComponent, AboutComponent, ProjectsComponent, LanguagesSkillsComponent],
  imports: [CommonModule, PortfolioRoutingModule,],
})
export class PortfolioModule { }
