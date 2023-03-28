import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from '../core/header/header.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { about: true, showImage: false, background: false } },
  { path: 'about', component: AboutComponent, data: { about: false, showImage: true, background: true } },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule { }

/*Here, you added routes to the “About” and “Projects” pages by specifying paths to the components and adding them to the routes array.*/
